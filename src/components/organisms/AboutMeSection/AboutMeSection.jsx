import React from 'react';

import Button from '../../atoms/Button/Button';
import Headline from '../../atoms/Headline/Headline';
import Focuses from '../../molecules/Focuses/Focuses';
import aboutMe from './assets/tati.jpg';
import styles from './styles.module.scss';

const AboutMeSection = () => (
  <section id="aboutme" className={`${styles.sectionWrapper}`}>
    <div className="container">
      <Headline>About me</Headline>
      <div className={styles.wrapper}>
        <img src={aboutMe} alt="Tatiana Baradari" />
        <div className={styles.aboutMe}>
          <p>Hi, I'm Tatiana.</p>
          <p>I am a freelance frontend developer with expertise in React.</p>
          <div style={{ fontWeight: "600" }}>
            You are right with me for
            <Focuses
              list={[
                "New development with React best practices",
                "Migration of existing solutions to the React ecosystem",
                "React mentoring",
              ]}
            />
          </div>
          <p>
            I also have a broad network of experts, including everything from
            designers to system architects.
          </p>
          <p>
            I love Berlin. I love green. To the office I come with the bicycle
            and I love to walk around the city.
          </p>
          <p>
            Since January 2020 I have been a mentor in the Frontend Engineering
            Program of the FrauenLoop gUG. I am very proud to support other
            women in IT!
          </p>
          {/* <p>Hallo, Ich bin Tatiana.</p>
          <p>
            Ich bin eine freiberufliche Frontend Entwicklerin mit Expertise in
            React.
          </p>
          <div style={{ fontWeight: "600" }}>
            Bei mir sind Sie richtig für
            <Focuses
              list={[
                "Neuentwicklung mit React Best Practices",
                "Migration von bestehenden Lösungen in das React Ecosystem",
                "React Mentoring",
              ]}
            />
          </div>
          <p>
            Außerdem verfüge ich über ein breites Experten-Netzwerk, das alles
            von Designer bis System Architekten beinhaltet.
          </p>
          <p>
            Ich liebe Berlin. Ich liebe es grün. Ins Büro komme ich mit dem
            Fahrrad und ich laufe sehr gerne durch die Stadt.
          </p>
          <p>
            Seit Januar 2020 bin ich Mentorin im Frontend Engineering Programm
            der FrauenLoop gUG geworden. Ich bin sehr stolz andere Frauen in der
            IT unterstützen zu dürfen!
            </p> */}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button>
          Let's talk
          {/* Lass uns reden */}
        </Button>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
