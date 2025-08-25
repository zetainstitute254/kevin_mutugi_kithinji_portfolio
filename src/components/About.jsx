import React from 'react';
import { cvData } from '../data/cvData';
import styles from './About.module.css';

function About() {
  const { summary, skills } = cvData.about;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;