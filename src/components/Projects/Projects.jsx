import React, { useState } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Track which "pair" of projects is showing
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Force re‐render with a unique key to trigger a fade animation
  const [transitionKey, setTransitionKey] = useState(0);

  // Move to the previous 2 projects (wrap around if needed)
  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - 2 + projects.length) % projects.length);
    // Increment transitionKey to trigger fade
    setTransitionKey((prev) => prev + 1);
  };

  // Move to the next 2 projects (wrap around if needed)
  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + 2) % projects.length);
    // Increment transitionKey to trigger fade
    setTransitionKey((prev) => prev + 1);
  };

  // Always show exactly 2 projects side‐by‐side
  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length]
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderWrapper}>
        {/* Left Arrow */}
        <button className={styles.arrowBtn} onClick={prevProjects}>
          &#8249; {/* or use an icon library */}
        </button>

        {/* Two cards side by side */}
        <div className={`${styles.projects} ${styles.fadeEnter}`} key={transitionKey}>
          {visibleProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowBtn} onClick={nextProjects}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
