import React from 'react';

import styles from './styles.module.scss';

const ContactSection = () => (
  <section className={`${styles.sectionWrapper} container`}>
    <h2 className={styles.sectionHeader}>
      Kontakt
    </h2>
    <div className={styles.line} />
    <div className={styles.contactData}>
      <p>Wünschen Sie eine Zusammenarbeit mit mir? Bitte kontaktieren Sie mich unter:</p>
      <p>+49 (0)176 38667325</p>
      <p>tatiana.baradari@gmail.com</p>
    </div>


  </section>
);

export default ContactSection;
