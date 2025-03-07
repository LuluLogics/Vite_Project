import React, { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Holla at me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" className={styles.disco}/>
                    <a href="http://gmail.com">LuluLogicz@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" className={styles.disco}/>
                    <a href="https://www.linkedin.com/in/l-abrahams-439567208/">linkedin.com/LuluLogics</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/dis.png")} alt="Discord Icon" className={styles.disco} />
                    <a href="https://www.discord.com/Lulu">discord.com/LuluLogics</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" className={styles.disco}/>
                    <a href="https://github.com/LuluLogics">github.com/LuluLogics</a>
                </li>
            </ul>
        </footer>
      </main>
      <footer className={styles.footer}>
          <p className={styles.copyright}>
              &copy; {year} LuluLogics
          </p>
      </footer>
    </div>
  );
};
