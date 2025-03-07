import React, { useState } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // We'll track which pair of projects to show
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous "page" (two projects back)
  const prevProjects = () => {
    // Only move backward if there's room
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 2);
    } else {
      // Optionally wrap around to the end:
      // setCurrentIndex(projects.length - 2);
    }
  };

  // Move to the next "page" (two projects forward)
  const nextProjects = () => {
    // Only move forward if there's room
    if (currentIndex + 2 < projects.length) {
      setCurrentIndex((prev) => prev + 2);
    } else {
      // Optionally wrap around to the start:
      // setCurrentIndex(0);
    }
  };

  // Slice the projects array to only show two at a time
  const visibleProjects = projects.slice(currentIndex, currentIndex + 2);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrowBtn} onClick={prevProjects}>
          &#8249; {/* Left arrow */}
        </button>

        <div className={styles.projects}>
          {visibleProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        <button className={styles.arrowBtn} onClick={nextProjects}>
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};
