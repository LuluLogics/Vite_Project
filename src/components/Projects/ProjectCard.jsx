import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>
      {/* Left or top: Image */}
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`image of ${title}`}
          className={styles.image}
        />
      </div>

      {/* Right or bottom: Text content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, idx) => (
            <li key={idx} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={demo} className={styles.link}>
            Demo
          </a>
          <a href={source} className={styles.link}>
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};
