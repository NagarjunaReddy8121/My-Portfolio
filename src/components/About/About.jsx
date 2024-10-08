import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
     <section className={styles.container} id="about">
        <h2 className={styles.title}> About</h2>
        <div className={styles.content}><img src={getImageUrl("about/heroImage1.png")}
            alt="Me sitting with laptop" className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
               <li className={styles.aboutItem}><img src={getImageUrl("about/serverImage.png")} alt="Server Image"/>
               <div className={styles.aboutItemText}>
                  <h3>Back-End Developer</h3>
                  <p>I'm a Java Developer with experience in developing REST API's by using Java and Spring Boot.</p>    
               </div>
               </li>
            </ul>
        </div>
     </section>
  );
};
