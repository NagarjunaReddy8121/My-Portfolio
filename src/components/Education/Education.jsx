import React from "react";

import styles from "./Education.module.css";

import education from "../../data/education.json";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
        <h2 className= {styles.title}>Education</h2>
        <div className={styles.educations}>
            {
              education.map((educations, id)=>{
                return(
                    <EducationCard key={id} educations={educations}/>
                );
            })
            }
        </div>
    </section>
  );
};
