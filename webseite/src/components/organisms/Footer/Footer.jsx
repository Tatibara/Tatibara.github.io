import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.socialLinks}>
        <a href="https://www.xing.com/profile/Tatiana_Baradari/" rel="noopener noreferrer" target="_blank">
          <span className="fab fa-xing" />
        </a>
        <a href="https://www.linkedin.com/in/tatiana-baradari/" rel="noopener noreferrer" target="_blank">
          <span className="fab fa-linkedin-in" />
        </a>
        <a href="https://github.com/tatibara" rel="noopener noreferrer" target="_blank">
          <span className="fab fa-github" />
        </a>
      </div>
      <div className={styles.links}>
        <Link to={NavigationUrls.imprintPageUrl}>Impressum</Link>
      </div>
    </div>
    <div className={styles.copyright}>&copy; Copyright 2020 Baradari Solutions</div>
  </footer>
);

export default Footer;
