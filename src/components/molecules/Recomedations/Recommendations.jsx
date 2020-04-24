import React from 'react';

import IosQuoteOutline from 'react-ionicons/lib/IosQuoteOutline';
import { Slide } from 'react-slideshow-image';

import ReadMoreQuoteLink from '../../atoms/ReadMoreQuoteLink/ReadMoreQuoteLink';
import styles from './styles.module.scss';

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Recommendations = () => (
  <div className={styles.recommendations}>
    <IosQuoteOutline fontSize="30px" color="#d1a327" />
    <div className="slide-container">
      <Slide {...properties}>

        <div className="each-fade">
          <div>
            <i className={styles.quote}>
              &ldquo; ... What was amazing to me, Tatiana always comprehended instructions
              quickly and was flexible when changes had to be made in the original plan. ... &ldquo;
            </i>

            <div className={styles.author}>
              -
              {' '}
              <span style={{ color: 'rgb(167, 130, 32)', fontWeight: '600' }}>Mariola Król</span>
              , Product Owner w ERGO Digital IT
            </div>
            <ReadMoreQuoteLink />

          </div>
        </div>
        <div className="each-fade">
          <div>
            <i className={styles.quote}>
              &ldquo; ... Tatiana participated actively in all meetings,
              proactively solve issues and collaborated confidently
              with business clients in both English and German language. ... &ldquo;
            </i>
            <div className={styles.author}>
              -
              {' '}
              <span style={{ color: 'rgb(167, 130, 32)', fontWeight: '600' }}>Kamila Kowalczyk</span>
              , Scrum Master w ERGO Digital IT
            </div>
            <ReadMoreQuoteLink />
          </div>
        </div>
        <div className="each-fade">
          <i className={styles.quote}>
            &ldquo; ... What I valued the most were code reviews,
            I could always rely on Tatiana to give me valuable
            advice on good practices in React, check my code
            for errors and have a professional discussion in
            case of disagreements. ... &ldquo;
          </i>
          <div className={styles.author}>
            -
            {' '}
            <span style={{ color: 'rgb(167, 130, 32)', fontWeight: '600' }}>Martin Witczak</span>
            , Freelance Software Engineer
          </div>
          <ReadMoreQuoteLink />
        </div>

      </Slide>
    </div>
  </div>
);

export default Recommendations;
