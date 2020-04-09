import React from 'react';

import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';

import styles from './styles.module.scss';

const QualifikationSection = () => (
  <section className={styles.sectionWrapper}>
    <div className="container">
      <h2 className={styles.sectionHeader}>
        Qualifikationen
      </h2>
      <div className={styles.line} />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosConstructOutline fontSize="60px" color="#d1a327" />
          <h3>Schwerpunkte</h3>
        </div>
        <p className={styles.left}>
          JavaScript, TypeScript, React, Node.js, GraphQL CSS3, HTML5,
          Responsive Design, Wartbarer und Skalierbarer Code, Cross-Browser-
          Kompatibilität, Optimierungstechniken und Unit Testing
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosTrendingUp fontSize="60px" color="#d1a327" />
          <h3>Erfahrung in Zahlen</h3>
        </div>

        <ul className={styles.left}>
          <li>10+ in der Softwareentwicklung</li>
          <li>
            7 in der Frontend-Entwicklung
          </li>
          <li>3 mit React und dessen Ecosystem</li>
        </ul>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosFlaskOutline fontSize="60px" color="#d1a327" />
          <h3>Abschlüsse in</h3>
        </div>
        <ul className={styles.left}>
          <li>
            IT-Management - Angewandte Informatik im Management
            (Wirtschaftsinformatik), Diplom-Abschluss
          </li>
          <li>
            Informatik, Schwerpunkt: Service und Software
            Engineering, Bachelor of Science
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default QualifikationSection;
