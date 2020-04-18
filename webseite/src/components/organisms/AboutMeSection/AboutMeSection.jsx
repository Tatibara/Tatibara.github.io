import React from 'react';

import Button from '../../atoms/Button/Button';
import Focuses from '../../molecules/Focuses/Focuses';
import aboutMe from './DSC03127.jpg';
import styles from './styles.module.scss';

const AboutMeSection = () => (
  <section id="aboutme" className={`${styles.sectionWrapper}`}>
    <div className="container">
      <h2 className={styles.sectionHeader}>Über mich</h2>
      <div className={styles.line} />
      <div className={styles.wrapper}>
        <img src={aboutMe} alt="about me" />
        <div className={styles.aboutMe}>
          <p>Hallo, Ich bin Tatiana.</p>
          <p>
            Ich bin eine Senior Frontend Entwicklerin mit Expertise in React.
            <br />
            Seit Juni 2017 bin ich eine Freelancerin.
            <br />
            In meiner Karier habe ich Startups, klein, mittelständige
            und große Unternehmen unterstütz.
          </p>
          <div>
            Bei mir sind Sie richtig bei
            <Focuses list={
              ['Neuentwicklung mit React Best Practices',
                'Migration von bestehenden Lösungen in das React Ecosystem',
                'React Mentoring']
          } />
          </div>
          <p>
            Außerdem verfüge ich über ein breites Experten-Netzwerk von Designer
            bis System Architekten.
          </p>
          <p>
            Ich liebe Berlin. Ich liebe es grün. Ins Büro komme ich mit dem Fahrrad und ich laufe
            durch die Stadt sehr gern.
          </p>
          <p>
            Seit Januar 2020 bin ich Mentorin im Frontend Engineering Programm
            der FrauenLoop gUG geworden. Ich bin sehr stolz die Frauen in IT
            unterstützen zu dürfen!
          </p>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button>Lass uns reden</Button>
      </div>
    </div>

  </section>
);

export default AboutMeSection;
