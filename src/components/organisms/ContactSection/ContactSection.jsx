import React from 'react';

import Headline from '../../atoms/Headline/Headline';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const ContactSection = () => (
  <section className={`${styles.sectionWrapper} container`} id="contact">
    <Headline>Contact</Headline>
    <div className={styles.contactData}>
      <p>
        Would you like to work with me? Please contact me under:
        {/* Wünschen Sie eine Zusammenarbeit mit mir? Bitte kontaktieren Sie mich unter: */}
      </p>
      <a href="tel:+4917638667325">+49 (0)176 38667325</a>
      <br />
      <a title="Contact" href="mailto:tatiana.baradari@gmail.com">
        tatiana.baradari@gmail.com
      </a>
      <br />
      <br />
      <p>
        You can find me here:
        {/* Sie finden mich hier: */}
      </p>
      <SocialLinks />
    </div>
  </section>
);

export default ContactSection;
