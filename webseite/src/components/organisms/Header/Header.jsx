import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.headerWrapper}>
    <Link to={NavigationUrls.homePageUrl} >
      <h1 className={styles.logoText}>BS</h1>
      <span className={styles.logoSubtext}>be smart</span>
    </Link>
    <ul className={styles.menu}>
    <li>Home</li>
    <li>Passionen</li>
    <li>Qualifikationen</li>
    <li>Kontakt</li>
    </ul>
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
  </div>
);

export default Header;
