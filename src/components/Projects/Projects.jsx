import React, { useRef } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Use a ref to reference the scrollable container
  const scrollRef = useRef(null);

  // Each arrow click will scroll left/right by this many pixels
  const scrollAmount = 400;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderWrapper}>
        {/* Left arrow */}
        <button className={styles.arrowBtn} onClick={scrollLeft}>
          &#8249; {/* or an icon from a library */}
        </button>

        {/* Scrollable container holding all ProjectCards */}
        <div className={styles.projects} ref={scrollRef}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        {/* Right arrow */}
        <button className={styles.arrowBtn} onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
