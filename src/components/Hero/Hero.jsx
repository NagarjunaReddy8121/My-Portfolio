import React from "react";

import Styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import resume from '../../../assets/hero/Nagarjuna_CV.pdf'

export const Hero= () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hi, I'm Nagarjuna Reddy</h1>
            <p className={Styles.description}>
                I'm a Software Engineer with 3+ years of experience
                using Java, Spring Boot and Microservices.
                Reach out if you'd like to learn more!!
            </p>
            {/* <a href="mailto:nnagarjunareddy18@gmail.com" className={Styles.contactBtn}>Contact Me</a> */}
            <a href={resume} target="_blank" data-text="Download CV"  download="Nagarjuna_CV.pdf" className={Styles.downloadBtn}>Download CV</a>
        </div>
        <img src={getImageUrl("hero/heroImage2.png")} alt="Hero image of me" className={Styles.heroImg}/>
        <div className={Styles.topBlur} />
        <div className={Styles.bottomBlur} />

    </section>
  );
};
