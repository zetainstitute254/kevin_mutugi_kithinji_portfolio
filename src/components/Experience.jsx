import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Experience.module.css';

function Experience() {
  const { experience } = cvData;

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>Work Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className={styles.jobEntry}>
            <h3 className={styles.jobTitle}>
              {job.role} at {job.company}
            </h3>
            <p className={styles.jobDuration}>
              {job.startDate} - {job.endDate}
            </p>
            <ul className={styles.jobDescription}>
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;