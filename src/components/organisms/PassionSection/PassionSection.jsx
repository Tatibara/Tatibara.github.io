import React from 'react';

import IosAmericanFootballOutline
  from 'react-ionicons/lib/IosAmericanFootballOutline';
import IosEaselOutline from 'react-ionicons/lib/IosEaselOutline';
import LogoJavascript from 'react-ionicons/lib/LogoJavascript';

import Customers from '../../molecules/Customers/Customers';
import Recommendations from '../../molecules/Recomedations/Recommendations';
import styles from './styles.module.scss';

console.log('Passionen!');

const PassionSection = () => (
  <section id="passions" className={`${styles.sectionWrapper} container`}>
    <h2 className={styles.sectionHeader}>
      Leistungen
    </h2>
    <div className={styles.line} />
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <LogoJavascript fontSize="60px" color="#d1a327" />
        <h3>JavaScript</h3>
        <p>
          Saubere Entwicklung in JavaScript mit React & Node.js unterstützt durch TypeScript
        </p>
      </div>
      <div className={styles.element}>
        <IosAmericanFootballOutline fontSize="60px" color="#d1a327" />
        <h3>Teamarbeit</h3>
        <p>
          Gemeinsame Entwicklung von tollen Produkten im agilen Umfeld
        </p>
      </div>
      <div className={styles.element}>
        <IosEaselOutline fontSize="60px" color="#d1a327" />
        <h3>Mentoring</h3>
        <p>
          Aufbau von Frontend Developer Kompetenzen im Team mit Fokus auf Frauen in der IT
        </p>
      </div>
    </div>
    <Recommendations />
    <Customers />
  </section>
);

export default PassionSection;
