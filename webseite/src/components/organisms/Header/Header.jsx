import React from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import Button from '../../atoms/Button/Button';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.headerWrapper}>
    <Link to={NavigationUrls.homePageUrl}>
      <h1 className={styles.logoText}>BS</h1>
      <span className={styles.logoSubtext}>be smart</span>
    </Link>
    <ul className={styles.menu}>
      <li>Home</li>
      <li>Passionen</li>
      <li>Qualifikationen</li>
      <li>Über mich</li>
      <li><Button>Kontakt</Button></li>
    </ul>
    <div>
      <span className={styles.telefon}>+49 (0)176 38667325</span>
      <SocialLinks color="#fff" />
    </div>

  </div>
);

export default Header;
