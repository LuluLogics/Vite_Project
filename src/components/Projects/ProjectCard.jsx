// import React from 'react'
// import { getImageUrl } from '../../utils';
// import styles from "./ProjectCard.module.css"

// export const ProjectCard = ({
//     project : {title, imageSrc, description, skills, demo, source
// }}) => {
//   return (
//     <div className={styles.container}>
//         <img 
//             src={getImageUrl (imageSrc)} 
//             alt={`image of ${title}`}
//             className={styles.image}
//         />
//         <h3 className={styles.title}>{title}</h3>
//         <p className={styles.description}>{description}</p>
//         <ul className={styles.skills}>{
//             skills.map((skill, id) => {
//                 return (
//                     <li key={id} className={styles.skill}>{skill}</li>
//                 );
//             })}
//         </ul>
//         <div className={styles.links}>
//             <a href={demo} className={styles.link}>
//                 Demo
//             </a>
//             <a href={source} className={styles.link}>
//                 Source code
//             </a>
//         </div>
//     </div>
//   );
// };

import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container}>
      {/* Left Arrow */}
      <button className={styles.arrowLeft}>
        <FaChevronLeft />
      </button>

      {/* Image Section */}
      <img src={getImageUrl(imageSrc)} alt={`Project: ${title}`} className={styles.image} />

      {/* Text Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link}>Demo</a>
          <a href={source} className={styles.link}>Source Code</a>
        </div>
      </div>

      {/* Right Arrow */}
      <button className={styles.arrowRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};