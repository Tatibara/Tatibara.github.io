import React from 'react';

import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
// import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline';
import IosSchoolOutline from 'react-ionicons/lib/IosSchoolOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';

import SkillChart from '../../atoms/SkillChart/SkillChart';
import Focuses from '../../molecules/Focuses/Focuses';
import styles from './styles.module.scss';

const skills = ['Responsive Design', 'Wartbarer und Skalierbarer Code', 'Cross-Browser-Kompatibilität', 'Optimierungstechniken', 'Unit Testing'];
const experiances = ['10+ in der Softwareentwicklung', '7 in der Frontend-Entwicklung', '3 mit React und dessen Ecosystem'];
const educations = ['Diplom-Wirtschaftsinformatikerin', 'Bachelor of Science Informatik'];

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
          <SkillChart size="350px">
            JavaScript / TypeScript
          </SkillChart>
          <SkillChart size="350px">
            React + Ecosystem
          </SkillChart>
          <SkillChart size="200px">
            Node.js / GraphQL
          </SkillChart>
          <SkillChart size="350px">
            CSS3 / HTML5
          </SkillChart>
          <br />
          <Focuses list={skills} />
        </p>
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

      <div className={styles.wrapper}>
        <div className={styles.right}>
          <IosSchoolOutline fontSize="60px" color="#d1a327" />
          <h3>Zertifikate / Abschlüsse </h3>
        </div>
        <div className={styles.left}>
          <Focuses list={['Public Speaking', 'Group Communication']} />
          <Focuses list={educations} />
        </div>
      </div>
    </div>
  </section>
);

export default QualifikationSection;