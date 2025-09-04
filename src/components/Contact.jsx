import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Contact.module.css';

function Contact() {
  const { email, phone, whatsApp } = cvData.contact;

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* <h2 className={styles.heading}>Get in Touch</h2> */}
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${email}`} className={styles.contactLink}>
              {email}
            </a>
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>WhatsApp:</strong> {whatsApp}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;