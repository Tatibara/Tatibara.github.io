import React from 'react';

import basilocomLogo from './basilicom_logo.png';
import ergoDitLogo from './Ergo-DIT-logo.png';
import frauenLoopLogo from './frauenlooplogo-2.jpg';
import soniqServiceLogo from './soniq_services_logo.jpg';
import styles from './styles.module.scss';

const Customers = () => (
  <div className={styles.customers}>
    <img src={basilocomLogo} alt="Logo" className={styles.basilicom} />
    <img src={ergoDitLogo} alt="Logo" className={styles.ergoDit} />
    <img src={frauenLoopLogo} alt="Logo" className={styles.frauenLoop} />
    <img src={soniqServiceLogo} alt="Logo" className={styles.soniqService} />

  </div>
);

export default Customers;
