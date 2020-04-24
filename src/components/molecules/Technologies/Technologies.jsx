import React from 'react';

import { ReactComponent as Css3Logo } from './assets/css3-logo.svg';
import { ReactComponent as GraphqlLogo } from './assets/graphql-logo.svg';
import { ReactComponent as Html5Logo } from './assets/html5-logo.svg';
import { ReactComponent as JavaScriptLogo } from './assets/javascript-logo.svg';
import { ReactComponent as NodejsLogo } from './assets/nodejs-logo.svg';
import { ReactComponent as ReactLogo } from './assets/react-logo.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript-logo.svg';
import styles from './styles.module.scss';

const Technologies = () => (
  <div className={styles.technologies}>
    <JavaScriptLogo />
    <TypescriptLogo />
    <Html5Logo />
    <Css3Logo />
    <ReactLogo />
    <NodejsLogo />
    <GraphqlLogo />
  </div>
);

export default Technologies;
