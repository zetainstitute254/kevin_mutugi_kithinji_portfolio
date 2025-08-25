import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Projects.module.css';

function Projects() {
  const { projects } = cvData;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;