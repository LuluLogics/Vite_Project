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

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/travel.png")} 
                        alt="BikerIcon" 
                        className={styles.icons} 
                    />
                    <div className={styles.aboutImageText}>
                        <h3>Travel entusiaest</h3>
                        <p> I find joy in exploring new cultures 
                            and discovering breathtaking landscapes. Whether wandering through 
                            bustling city streets or hiking remote mountain trails, I embrace 
                            every journey as an opportunity to learn & grow.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/book.png")} 
                        alt="Book Icon"
                        className={styles.icons} 
                    />
                    <div className={styles.aboutImageText}>
                        <h3>Literary Explorer</h3>
                        <p>
                            There’s nothing like getting lost in a compelling read, whether at home, 
                            in a café, or on a long flight to my next destination.  
                            <br />
                                <em>"Once you learn to read, you will be forever free."</em> - Frederick Douglass<img src={getImageUrl("about/raised.png")} alt="Raised Fist Icon" className={styles.textIcon}/>
                            
                                {/* <em>"A book can change a man’s life."</em> - Malcolm X<img src={getImageUrl("about/raised.png")} alt="Raised Fist Icon" className={styles.textIcon}/> */}
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
  );
};
