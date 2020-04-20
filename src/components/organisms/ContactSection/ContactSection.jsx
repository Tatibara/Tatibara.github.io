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
      <a href="tel:+4917638667325">+49 (0)176 38667325</a>
      <br />
      <a title="Kontakt" href="mailto:tatiana.baradari@gmail.com">
        tatiana.baradari@gmail.com
      </a>
      <br />
      <br />
      <p>Sie finden mich hier:</p>
      <SocialLinks />
    </div>


  </section>
);

export default ContactSection;
