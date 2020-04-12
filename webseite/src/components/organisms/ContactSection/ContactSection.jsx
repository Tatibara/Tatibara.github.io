import React from 'react';

import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const ContactSection = () => (
  <section className={`${styles.sectionWrapper} container`} id="contact">
    <h2 className={styles.sectionHeader}>
      Kontakt
    </h2>
    <div className={styles.line} />
    <div className={styles.contactData}>
      <p>Wünschen Sie eine Zusammenarbeit mit mir? Bitte kontaktieren Sie mich unter:</p>
      <p>+49 (0)176 38667325</p>
      <p>tatiana.baradari@gmail.com</p>
      <br />
      <p>Sie finden mich hier:</p>
      <SocialLinks />
    </div>


  </section>
);

export default ContactSection;
