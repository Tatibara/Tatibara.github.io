import React from 'react';

import IosArrowDropdown from 'react-ionicons/lib/IosArrowRoundDown';

import Header from '../Header/Header';
import styles from './styles.module.scss';

const BigHeader = () => (
  <header className={styles.header}>
  <Header />
  <div className={styles.headerTextWrapper}>
  <h1 className={styles.headerText}>Baradari Solutions</h1>
  <span className={styles.headerSubtext}>Web Frontend Architektur & Trainings</span>
  </div>
  <div className={styles.downArrowWrapper}>
  <span className={styles.goDownText}>nach unten</span>
  <IosArrowDropdown fontSize="60px" color="#ddcaaa" />
  </div>
 
  </header>
);

export default BigHeader;
