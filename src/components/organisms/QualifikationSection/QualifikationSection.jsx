import React from 'react';

import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';

import Button from '../../atoms/Button/Button';
import Headline from '../../atoms/Headline/Headline';
import Focuses from '../../molecules/Focuses/Focuses';
import Technologies from '../../molecules/Technologies/Technologies';
import styles from './styles.module.scss';

const skills = [
  "Responsive Design",
  "Maintainable and Scalable Code",
  "Cross-browser Compatibility",
  "Optimization Techniques",
  "Unit Testing",
];
// const skills = [
//   "Responsive Design",
//   "Wartbarer und Skalierbarer Code",
//   "Cross-Browser-Kompatibilität",
//   "Optimierungstechniken",
//   "Unit Testing",
// ];
const experiences = [
  "10+ years in software development",
  "7 years in front-end development",
  "3 years with React and its ecosystem",
];
// const experiences = [
//   "10+ Jahre in der Softwareentwicklung",
//   "7 Jahre in der Frontend-Entwicklung",
//   "3 Jahre mit React und dessen Ecosystem",
// ];

const QualifikationSection = () => (
  <section id="qualifications" className={styles.sectionWrapper}>
    <div className="container">
      <Headline>Qualifications</Headline>
      <Technologies />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosConstructOutline fontSize="60px" color="#d1a327" />
          <h3>
            Key areas
            {/* Schwerpunkte */}
          </h3>
        </div>
        <div className={styles.left}>
          <Focuses list={skills} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosTrendingUp fontSize="60px" color="#d1a327" />
          <h3>
            Experience in numbers
            {/* Erfahrung in Zahlen */}
          </h3>
        </div>

        <div className={styles.left}>
          <Focuses list={experiences} />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button>
          Contact me
          {/* Kontaktieren Sie mich */}
        </Button>
      </div>
    </div>
  </section>
);

export default QualifikationSection;
