import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/kidPc.png")} 
            alt="chillin with pc" 
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/road.png")} 
                        alt="BikerIcon" 
                        className={styles.icons} 
                    />
                    <div className={styles.aboutImageText}>
                        <h3>Motorcyle entusiaest</h3>
                        <p> I live for the thrill of the open road and the roar of the engine. 
                            Whether carving through winding mountain roads or cruising along scenic coastal highways, 
                            I find freedom and adventure on two wheels.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/sport.png")} 
                        alt="SkaterIcon"
                        className={styles.icons} 
                        />
                    <div className={styles.aboutImageText}>
                        <h3>Skateboard fanetic</h3>
                        <p>I thrive on the adrenaline of landing new tricks and the creativity 
                            of crafting unique lines. From local skate parks to urban street spots, 
                            I embrace the challenge and freedom that skateboarding offers.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/coding.png")} 
                        alt="WebIcon"
                        className={styles.icons} 
                        />
                    <div className={styles.aboutImageText}>
                        <h3>Web Designer</h3>
                        <p> I specialize in creating visually stunning and user-friendly digital 
                            experiences. With a keen eye for detail and a love for innovative design, 
                            I craft websites that are not only beautiful but also highly functional.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
