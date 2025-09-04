// server/server.js
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main async function to set up the database and start the server
async function setupDatabaseAndStartServer() {
  try {
    // Open the database connection asynchronously
    const db = await sqlite.open({
      filename: 'contact_forms.db',
      driver: sqlite3.Database
    });

    // Create the table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contact_forms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        submission_date TEXT NOT NULL
      )
    `);

    console.log('Database connected and table ready.');

    // Email Transporter (replace with your email service details)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // API endpoint for form submission
    app.post('/api/contact', async (req, res) => {
      const { name, email, phone, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required.' });
      }

      const submissionDate = new Date().toISOString();

      try {
        await db.run(
          'INSERT INTO contact_forms (name, email, phone, message, submission_date) VALUES (?, ?, ?, ?, ?)',
          [name, email, phone, message, submissionDate]
        );

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h3>New Message from Your Portfolio</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><em>Submitted on ${submissionDate}</em></p>
          `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Form submitted successfully!' });

      } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
      }
    });

    // NEW ROUTE TO FETCH ALL CONTACTS
    app.get('/api/contacts', async (req, res) => {
      try {
        const contacts = await db.all('SELECT * FROM contact_forms');
        res.json(contacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Failed to fetch contacts.' });
      }
    });

    // Start the server only after the database is ready
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Error setting up the server or database:', error);
  }
}

setupDatabaseAndStartServer();