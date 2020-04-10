import React from 'react';

import aboutMe from './DSC03127.jpg';
import styles from './styles.module.scss';

const AboutMeSection = () => (
  <section className={`${styles.sectionWrapper}`}>
    <div className="container">
      <h2 className={styles.sectionHeader}>
        Über mich
      </h2>
      <div className={styles.line} />
      <div className={styles.wrapper}>
        <img src={aboutMe} alt="about me" />
        <div className={styles.aboutMe}>
          <p>Ich heiße Tatiana Baradari. Ich bin 35 Jahre alt.</p>
          <p>Ich liebe Berlin.</p>
          <p>Ich liebe meine Freunde, Natur und Fahrrad!</p>
          <p>Ich bin toll :)</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
