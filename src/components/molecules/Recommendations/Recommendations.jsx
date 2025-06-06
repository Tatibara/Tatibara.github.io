import React from 'react';

import IosQuoteOutline from 'react-ionicons/lib/IosQuoteOutline';
import { Slide } from 'react-slideshow-image';

import Recommendation from '../Recommendation/Recommendation';
import styles from './styles.module.scss';

const properties = {
  duration: 10000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
};

const Recommendations = () => (
  <div className={styles.recommendations}>
    <IosQuoteOutline fontSize="30px" color="#d1a327" />
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-fade">
          <Recommendation
            quote="It was really a pleasure working with Tatiana, she was always focused and highly motivated about coding and solving our many problems. Furthermore she fostered our newly established community of practice and shared her knowledge with us."
            author="Susanne Donner"
            position="Team Lead at DHL IT Services"
          />
        </div>
        <div className="each-fade">
          <Recommendation
            quote="What was amazing to me, Tatiana always comprehended instructions
        quickly and was flexible when changes had to be made in the original plan."
            author="Mariola Król"
            position="Product Owner ERGO Digital IT"
          />
        </div>
        <div className="each-fade">
          <Recommendation
            quote="I was inspired by Tatiana’s approach to teaching,
            which is based on encouraging curiosity and helping students
            build real-life applications in React."
            author="Larisa Kristya"
            position="Junior Frontend Developer"
          />
        </div>
        <div className="each-fade">
          <Recommendation
            quote="Tatiana participated actively in all meetings,
            proactively solved issues and collaborated confidently
            with business clients in both English and German language."
            author="Kamila Kowalczyk"
            position="Scrum Master ERGO Digital IT"
          />
        </div>
        <div className="each-fade">
          <Recommendation
            quote="What I valued the most were code reviews,
            I could always rely on Tatiana to give me valuable
            advice on good practices in React, check my code
            for errors and have a professional discussion in
            case of disagreements."
            author="Martin Witczak"
            position="Freelance Software Engineer"
          />
        </div>
      </Slide>
    </div>
  </div>
);

export default Recommendations;
