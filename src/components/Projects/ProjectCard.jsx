import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>
      {/* Left side: large image */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
        className={styles.image}
      />

      {/* Right side: text content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{description}</p>

        {/* Skills row (optional) */}
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        {/* Demo / Source code links */}
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
