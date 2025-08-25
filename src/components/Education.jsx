import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Education.module.css';

function Education() {
  const { education } = cvData;

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className={styles.heading}>Education</h2>
        {education.map((item, index) => (
          <div key={index} className={styles.educationEntry}>
            <h3 className={styles.degreeTitle}>
              {item.degree}
            </h3>
            <p className={styles.institution}>
              {item.institution}
            </p>
            <p className={styles.duration}>
              {item.startDate} - {item.endDate}
            </p>
            
            {item.relevantCoursework && item.relevantCoursework.length > 0 && (
              <div className={styles.coursework}>
                <h4>Relevant Coursework:</h4>
                <ul className={styles.courseworkList}>
                  {item.relevantCoursework.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.projects && item.projects.length > 0 && (
              <div className={styles.projects}>
                <h4>Key Projects:</h4>
                {item.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className={styles.projectEntry}>
                    <h5>{project.title}</h5>
                    <p className={styles.projectDuration}>{project.duration}</p>
                    <ul className={styles.projectDescription}>
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;