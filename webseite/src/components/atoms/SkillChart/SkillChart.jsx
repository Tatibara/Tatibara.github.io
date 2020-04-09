import React from 'react';

import styles from './styles.module.scss';

const SkillChart = ({ children, size }) => (
  <div className={styles.skills} style={{ width: size }}>
    {children}
  </div>
);

export default SkillChart;
