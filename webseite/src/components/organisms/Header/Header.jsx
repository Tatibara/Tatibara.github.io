import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.logoWrapper}>
  <Link to={NavigationUrls.homePageUrl} >
    <h1 className={styles.logoText}>BS</h1>
    <span className={styles.logoSubtext}>be smart</span>
    </Link>
  </div>
);

export default Header;
