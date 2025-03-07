import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  project: { title, imageSrc, description }
}) => {
  return (
    <div className={styles.card}>
      {/* Large gradient/phone mockup image */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
        className={styles.image}
      />

      {/* Title & subtitle only */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{description}</p>
    </div>
  );
};
