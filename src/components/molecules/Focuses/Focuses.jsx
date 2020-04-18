import React from 'react';

import MdCode from 'react-ionicons/lib/MdCode';

import styles from './styles.module.scss';

const Focuses = ({ list }) => (
  <ul className={styles.wrapper}>
    {list.map((item) => (
      <li key={item}>
        <MdCode fontSize="10px" color="#d1a327" />
        {' '}
        {item}
      </li>
    ))}

  </ul>
);

export default Focuses;
