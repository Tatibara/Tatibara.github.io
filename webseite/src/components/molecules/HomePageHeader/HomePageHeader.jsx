import React from 'react';

import styles from './styles.module.scss';

const HomePageHeader = () => (
  <div className={styles.content}>
    <div className={styles.boxRight} />
    <div className={styles.boxCenter}>
      <h1 className={styles.title}>Tatiana Baradari</h1>
      <h2>Freelance Senior Frontend Web Entwicklerin</h2>
    </div>
  </div>
);

export default HomePageHeader;
