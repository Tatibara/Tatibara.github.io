import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavigationUrls from '../../../routers/NavigationUrls';
import Button from '../../atoms/Button/Button';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.headerWrapper}>
    <Link to={NavigationUrls.homePageUrl}>
      <h1 className={styles.logoText}>BS</h1>
      <span className={styles.logoSubtext}>Be Smart</span>
    </Link>
    <ul className={styles.menu}>
      <li>
        <HashLink className={styles.link}>Home</HashLink>
      </li>
      <li>
        <HashLink className={styles.link} smooth to="#passions">
          Passionen
        </HashLink>
      </li>
      <li>
        <HashLink className={styles.link} smooth to="#qualifications">
          Qualifikationen
        </HashLink>
      </li>
      <li>
        <HashLink className={styles.link} smooth to="#aboutme">
          Über mich
        </HashLink>
      </li>
      <li>
        <Button smooth to="#contact">
          Kontakt
        </Button>
      </li>
    </ul>
    <div>
      <span className={styles.telefon}>+49 (0)176 38667325</span>
      <SocialLinks color="#fff" />
    </div>
  </div>
);

export default Header;
