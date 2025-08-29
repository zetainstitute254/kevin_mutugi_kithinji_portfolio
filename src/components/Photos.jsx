// src/components/Photos.jsx
import React from 'react';
import { cvData } from '../data/cvData';
import styles from './Photos.module.css';

function Photos() {
  const { photos } = cvData;

  return (
    <section id="photos" className={styles.photos}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Photos</h2>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoCard}>
              <img src={photo.image} alt={photo.caption} className={styles.photo} />
              {photo.caption && <p className={styles.caption}>{photo.caption}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Photos;