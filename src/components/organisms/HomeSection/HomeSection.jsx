import React from 'react';

import IosArrowDropdown from 'react-ionicons/lib/IosArrowRoundDown';
import { HashLink } from 'react-router-hash-link';

import styles from './styles.module.scss';

const BigHeader = () => (
  <header className={styles.header} id="home">
    <div className={styles.headerTextWrapper}>
      <h1 className={styles.headerText}>Baradari Solutions</h1>
      <span className={styles.headerSubtext}>
        Web Frontend Architecture & Mentoring
      </span>
    </div>
    <div className={styles.downArrowWrapper}>
      <span className={styles.goDownText}>
        Scroll for more
        {/* nach unten */}
      </span>
      <HashLink smooth to="#services">
        <IosArrowDropdown fontSize="60px" color="#ddcaaa" />
      </HashLink>
    </div>
  </header>
);

export default BigHeader;
