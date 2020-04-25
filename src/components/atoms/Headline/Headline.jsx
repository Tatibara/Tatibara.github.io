import React from 'react';

import styles from './styles.module.scss';

const Headline = ({ children }) => (
  <>
    <h2 className={styles.text}>
      {children}
    </h2>
    <div className={styles.line} />
  </>
);

export default Headline;
