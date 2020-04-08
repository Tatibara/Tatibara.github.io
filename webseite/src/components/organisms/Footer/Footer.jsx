import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.links}>
        <Link to={NavigationUrls.imprintPageUrl}>Impressum</Link>
      </div>
    </div>
    <div className={styles.copyright}>&copy; Copyright 2020 Baradari Solutions</div>
  </footer>
);

export default Footer;
