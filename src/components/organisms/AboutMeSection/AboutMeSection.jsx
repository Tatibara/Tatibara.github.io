import React from 'react';

import Button from '../../atoms/Button/Button';
import Focuses from '../../molecules/Focuses/Focuses';
import aboutMe from './assets/tati.jpg';
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
            Ich bin eine freiberufliche Frontend Entwicklerin mit Expertise in React.
          </p>
          <div style={{ fontWeight: '600' }}>
            Bei mir sind Sie richtig für
            <Focuses list={
              ['Neuentwicklung mit React Best Practices',
                'Migration von bestehenden Lösungen in das React Ecosystem',
                'React Mentoring']
          } />
          </div>
          <p>
            Außerdem verfüge ich über ein breites Experten-Netzwerk, das alles von Designer
            bis System Architekten beinhaltet.
          </p>
          <p>
            Ich liebe Berlin. Ich liebe es grün. Ins Büro komme ich mit dem Fahrrad und ich laufe
            sehr gerne durch die Stadt.
          </p>
          <p>
            Seit Januar 2020 bin ich Mentorin im Frontend Engineering Programm
            der FrauenLoop gUG geworden. Ich bin sehr stolz andere Frauen in der IT
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
