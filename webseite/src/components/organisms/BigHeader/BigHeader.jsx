import React from 'react';

import Header from '../Header/Header';
import styles from './styles.module.scss';

const BigHeader = () => (
  <header className={styles.header}>
  <Header />
  <div className={styles.headerTextWrapper}>
  <h1 className={styles.headerText}>Baradari Solutions</h1>
    <span className={styles.headerSubtext}>Web Frontend Architektur & Trainings</span>
  </div>
  </header>
);

export default BigHeader;
