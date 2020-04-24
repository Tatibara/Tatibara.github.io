import React from 'react';

import basilocomLogo from './assets/basilicom_logo.png';
import ergoDitLogo from './assets/Ergo-DIT-logo.png';
import frauenLoopLogo from './assets/Frauenloop_logo.png';
import {
  ReactComponent as SoniqServiceLogo,
} from './assets/soniq_services_logo.svg';
import styles from './styles.module.scss';

const Customers = () => (
  <div className={styles.customers}>
    <img src={basilocomLogo} alt="Logo" className={`${styles.customerLogo} ${styles.basilicom}`} />
    <img src={ergoDitLogo} alt="Logo" className={`${styles.customerLogo} ${styles.ergoDit}`} />
    <img src={frauenLoopLogo} alt="Logo" className={`${styles.customerLogo} ${styles.frauenLoop}`} />
    <SoniqServiceLogo alt="Logo" className={`${styles.customerLogo} ${styles.soniqService}`} />

  </div>
);

export default Customers;
