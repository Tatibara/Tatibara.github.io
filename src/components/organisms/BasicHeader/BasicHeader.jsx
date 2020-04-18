import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const Header = () => (
  <div
    className={`${styles.headerWrapper}`}
  >
    <Link to={NavigationUrls.homePageUrl}>
      <h1 className={styles.logoText}>BS</h1>
      <span className={styles.logoSubtext}>Be Smart</span>
    </Link>

    <div>
      <span className={styles.telefon}>+49 (0)176 38667325</span>
      <SocialLinks color="#000" />
    </div>
  </div>
);

export default Header;
