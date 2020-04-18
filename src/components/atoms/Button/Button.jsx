import React from 'react';

import { HashLink } from 'react-router-hash-link';

import styles from './styles.module.scss';

const Button = ({ children }) => (
  <HashLink smooth to="#contact" className={`${styles.btn} ${styles.btnYellow}`}>
    {children}
  </HashLink>
);

export default Button;
