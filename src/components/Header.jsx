// src/components/Header.jsx
import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Header.module.css';

function Header() {
  const { name, title, socialLinks } = cvData.header;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <nav className={styles.socialNav}>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;