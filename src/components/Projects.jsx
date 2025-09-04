import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Projects.module.css';

function Projects() {
  const { projects } = cvData;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}> {/* Note: Use className="container" for global styles */}
      <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectLinks}>
                {/* Show the GitHub link if it exists */}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View on GitHub
                  </a>
                )}
                
                {/* Conditionally show the live link only if it exists */}
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;