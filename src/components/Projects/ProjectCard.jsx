import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  project: { title, imageSrc, description, demo }
}) => {
  return (
    <div className={styles.card}>
      {/* Clickable link to the project's website */}
      <a 
        href={demo} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.imageLink}
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`image of ${title}`}
          className={styles.image}
        />
      </a>

      {/* Title & subtitle */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{description}</p>
    </div>
  );
};
