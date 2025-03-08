import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track slide direction

  // Function to trigger slide animation
  const triggerAnimation = (dir) => {
    setDirection(dir);
    setTimeout(() => setDirection(""), 400); // Reset animation after transition
  };

  // Move to previous 2 projects (loop around)
  const prevProjects = () => {
    triggerAnimation("left");
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 2 : (prev - 2 + projects.length) % projects.length
    );
  };

  // Move to next 2 projects (loop around)
  const nextProjects = () => {
    triggerAnimation("right");
    setCurrentIndex((prev) =>
      prev + 2 >= projects.length ? 0 : (prev + 2) % projects.length
    );
  };

  // Always show exactly 2 projects side-by-side
  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length]
  ];

  // ⏳ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProjects();
    }, 3000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Depend on currentIndex to re-run effect when index changes

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrowBtn} onClick={prevProjects}>
          &#8249;
        </button>

        {/* Scrolling effect applied based on direction */}
        <div
          className={`${styles.projects} ${
            direction === "left" ? styles.slideLeft : direction === "right" ? styles.slideRight : ""
          }`}
        >
          {visibleProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <button className={styles.arrowBtn} onClick={nextProjects}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
