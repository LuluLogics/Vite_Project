import React, { useState } from 'react';
import styles from './Projects.module.css';

import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.slider}>
        <button className={styles.arrow} onClick={prevProject}>
          &#8249; {/* left angle bracket */}
        </button>

        {/* Show the currently selected project */}
        <ProjectCard project={projects[currentIndex]} />

        <button className={styles.arrow} onClick={nextProject}>
          &#8250; {/* right angle bracket */}
        </button>
      </div>
    </section>
  );
};
