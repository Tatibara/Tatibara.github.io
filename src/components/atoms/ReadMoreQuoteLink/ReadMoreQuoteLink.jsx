import React from 'react';

import styles from './styles.module.scss';

const ReadMoreQuoteLink = () => (
  <div className={styles.readMore}>
    <a
      href="https://www.linkedin.com/in/tatiana-baradari/"
      rel="noopener noreferrer"
      target="__blank"
    >
      Read more
      {/* Weiter lesen */}
    </a>
  </div>
);

export default ReadMoreQuoteLink;
