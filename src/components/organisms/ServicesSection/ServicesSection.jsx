import React from 'react';

import IosAmericanFootballOutline
  from 'react-ionicons/lib/IosAmericanFootballOutline';
import IosEaselOutline from 'react-ionicons/lib/IosEaselOutline';
import LogoJavascript from 'react-ionicons/lib/LogoJavascript';

import Headline from '../../atoms/Headline/Headline';
import Customers from '../../molecules/Customers/Customers';
import Recommendations from '../../molecules/Recommendations/Recommendations';
import styles from './styles.module.scss';

const ServicesSection = () => (
  <section id="services" className={`${styles.sectionWrapper} container`}>
    <Headline>Services</Headline>
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <LogoJavascript fontSize="60px" color="#d1a327" />
        <h3>JavaScript</h3>
        <p>
          Clean development in JavaScript with React and Node.js supported by
          TypeScript
          {/* Saubere Entwicklung in JavaScript mit React & Node.js unterstützt
          durch TypeScript */}
        </p>
      </div>
      <div className={styles.element}>
        <IosAmericanFootballOutline fontSize="60px" color="#d1a327" />
        <h3>Teamwork</h3>
        <p>
          Joint development of great products in an agile environment
          {/* Gemeinsame Entwicklung von (tollen, erstklassigen, anspruchsvollen)
           Produkten im agilen Umfeld */}
        </p>
      </div>
      <div className={styles.element}>
        <IosEaselOutline fontSize="60px" color="#d1a327" />
        <h3>Mentoring</h3>
        <p>
          Development of frontend skills in teams with a focus on women in IT
          {/* Aufbau von Frontend Developer Kompetenzen im Team mit Fokus auf Frauen
          in der IT */}
        </p>
      </div>
    </div>
    <Recommendations />
    <Customers />
  </section>
);

export default ServicesSection;
