import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hey, call me Lulu";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Fix: Correctly slicing the string
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed of typing here (100ms per letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{text}</h1>
        <p className={styles.description}>
          I'm a software developer based in Ireland
          with a passion for creating exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <a 
          href="myCV.pdf" 
          download="L.Abrahams_Cv.pdf"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img src={getImageUrl("hero/logo8.png")} alt="myLogo" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
