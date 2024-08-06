import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!!</p>
    </div>
    <ul className={styles.links}>
    
        <li className={styles.link}><img src={getImageUrl("contact/em.png")} alt="EmailIcon" />
        <a href="mailto:nnagarjunareddy18@gmail.com">Gmail</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/whatsapp.png")} alt="whatsapp Icon" />
        <a href="https://wa.me/+91 8121907047">WhatsApp</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/github.png")} alt="Github Icon" />
        <a href="https://github.com/NagarjunaReddy8121">Github</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/linked.png")} alt="LinkedIn Icon" />
        <a href="www.linkedin.com/in/nagarjunareddyn">LinkedIn</a>
        </li>
    </ul>
  </footer>
  );
  
};
