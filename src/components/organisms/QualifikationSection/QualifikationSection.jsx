import React from 'react';

import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';

import Button from '../../atoms/Button/Button';
import Focuses from '../../molecules/Focuses/Focuses';
import Technologies from '../../molecules/Technologies/Technologies';
import styles from './styles.module.scss';

const skills = [
  'Responsive Design',
  'Wartbarer und Skalierbarer Code',
  'Cross-Browser-Kompatibilität',
  'Optimierungstechniken',
  'Unit Testing',
];
const experiances = [
  '10+ Jahre in der Softwareentwicklung',
  '7 Jahre in der Frontend-Entwicklung',
  '3 Jahre mit React und dessen Ecosystem',
];

const QualifikationSection = () => (
  <section id="qualifications" className={styles.sectionWrapper}>
    <div className="container">
      <h2 className={styles.sectionHeader}>Qualifikationen</h2>
      <div className={styles.line} />

      <Technologies />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosConstructOutline fontSize="60px" color="#d1a327" />
          <h3>Schwerpunkte</h3>
        </div>
        <div className={styles.left}>
          <Focuses list={skills} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosTrendingUp fontSize="60px" color="#d1a327" />
          <h3>Erfahrung in Zahlen</h3>
        </div>

        <div className={styles.left}>
          <Focuses list={experiances} />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button>Kontaktienren Sie mich</Button>
      </div>
    </div>
  </section>
);

export default QualifikationSection;
