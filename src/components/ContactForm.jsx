// src/components/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

// Get the API URL from the environment variables
const API_URL = import.meta.env.VITE_API_URL;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // Use the environment variable here
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(`Submission failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
      <h2 className={styles.heading}>Get in Touch</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton} disabled={status === 'Submitting...'}>
            {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;