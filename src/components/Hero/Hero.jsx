import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bradley Widjaja</h1>
        <p className={styles.description}>
        I'm currently studying at Institut Teknologi Sepuluh Nopember mastering in Informatics Engineering. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:bradleywidjaja507@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/bradley.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
