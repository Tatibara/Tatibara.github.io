import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <span>&copy; Copyright 2025 Baradari Solutions - Tatiana Baradari</span>
      <div className={styles.links}>
        <Link to={NavigationUrls.dataProtectionPageUrl}>
          Privacy Policy
          {/* Datenschutz */}
        </Link>
        {' '}
        |
        {' '}
        <Link to={NavigationUrls.imprintPageUrl}>
          Imprint
          {/* Impressum */}
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
