import React, { useState } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Track which pair of projects to show
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to add animation delay
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400); // Match animation duration
  };

  // Move to the previous 2 projects (loop around)
  const prevProjects = () => {
    triggerAnimation();
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 2 : (prev - 2 + projects.length) % projects.length
    );
  };

  // Move to the next 2 projects (loop around)
  const nextProjects = () => {
    triggerAnimation();
    setCurrentIndex((prev) =>
      prev + 2 >= projects.length ? 0 : (prev + 2) % projects.length
    );
  };

  // Always show exactly 2 projects at a time
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
          &#8249;
        </button>

        {/* Sliding animation when clicking arrows */}
        <div className={`${styles.projects} ${isAnimating ? styles.slide : ""}`}>
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
