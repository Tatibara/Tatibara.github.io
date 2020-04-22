import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavigationUrls from '../../../routers/NavigationUrls';
import Button from '../../atoms/Button/Button';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import styles from './styles.module.scss';

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.headerWrapper} ${navBackground && styles.headerWrapperScrolled}`}
    >
      <Link to={NavigationUrls.homePageUrl}>
        <h1 className={styles.logoText}>BS</h1>
        <span className={styles.logoSubtext}>Be Smart</span>
      </Link>
      <ul className={styles.menu}>
        <li>
          <HashLink className={styles.link} smooth to="#home">Home</HashLink>
        </li>
        <li>
          <HashLink className={styles.link} smooth to="#passions">
            Leistungen
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
        <span className={styles.telefon}>
          <a href="tel:+4917638667325">+49 (0)176 38667325</a>
        </span>
        <SocialLinks color={navBackground ? '#000' : '#fff'} />
      </div>
    </div>
  );
};

export default Header;
