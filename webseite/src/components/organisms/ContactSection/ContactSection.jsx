import React from 'react';

import styles from './styles.module.scss';

const ContactSection = () => (
  <section className={`${styles.sectionWrapper} container`}>
    <h2 className={styles.sectionHeader}>
      Kontakt
    </h2>
    <div className={styles.line} />

  </section>
);

export default ContactSection;
