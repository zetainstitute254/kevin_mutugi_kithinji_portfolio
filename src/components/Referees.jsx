// src/components/Referees.jsx
import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Referees.module.css';

function Referees() {
  const { referees } = cvData;

  return (
    <section id="referees" className={styles.referees}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Referees</h2>
        <div className={styles.refereeGrid}>
          {referees.map((referee, index) => (
            <div key={index} className={styles.refereeCard}>
              <h3 className={styles.name}>{referee.name}</h3>
              <p className={styles.title}>{referee.title}</p>
              <p className={styles.company}>{referee.company}</p>
              
              <div className={styles.contactInfo}>
                {referee.phone && <p><strong>Phone:</strong> {referee.phone}</p>}
                {referee.email && <p><strong>Email:</strong> <a href={`mailto:${referee.email}`}>{referee.email}</a></p>}
              </div>

              {referee.note && <p className={styles.note}>{referee.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Referees;