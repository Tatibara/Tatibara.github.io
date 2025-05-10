import React from 'react';

import styles from './styles.module.scss';

const SocialLinks = ({ color }) => (
  <span style={{ color }} className={styles.socialLinks}>

    {/* <a href="https://www.xing.com/profile/Tatiana_Baradari/" rel="noopener noreferrer" target="_blank">
      <span className="far fa-envelope" />
</a> */}
    <a href="https://www.xing.com/profile/Tatiana_Baradari/" rel="noopener noreferrer" target="_blank" aria-label="xing">
      <span className="fab fa-xing" />
    </a>
    <a href="https://www.linkedin.com/in/tatiana-baradari/" rel="noopener noreferrer" target="_blank" aria-label="linkedin">
      <span className="fab fa-linkedin-in" />
    </a>
    <a href="https://github.com/tatibara" rel="noopener noreferrer" target="_blank" aria-label="github">
      <span className="fab fa-github" />
    </a>
  </span>
);

export default SocialLinks;
