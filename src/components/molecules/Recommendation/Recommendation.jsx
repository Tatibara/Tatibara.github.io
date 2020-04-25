import React from 'react';

import ReadMoreQuoteLink from '../../atoms/ReadMoreQuoteLink/ReadMoreQuoteLink';
import styles from './styles.module.scss';

const Recommendation = ({ quote, author, position }) => (

  <div>
    <i className={styles.quote}>
      <q>
        {`... ${quote} ...`}
      </q>
    </i>

    <div className={styles.author}>
      -
      {' '}
      <span style={{ color: 'rgb(167, 130, 32)', fontWeight: '600' }}>{author}</span>
      {`, ${position}`}
    </div>
    <ReadMoreQuoteLink />

  </div>
);

export default Recommendation;
