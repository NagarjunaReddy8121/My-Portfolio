import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./EducationCard.module.css";

export const EducationCard = ({ educations: {title, name, place, startDate, endDate} }) => {
  return (
    <div className={styles.container}>
         <h3 className={styles.title}>{title}</h3>
         <p className={styles.description}>{`${name},${place}`}</p>
         <p>{`${startDate}-${endDate}`}</p>
         </div>
  )
}
