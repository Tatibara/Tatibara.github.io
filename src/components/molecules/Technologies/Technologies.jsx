import React from 'react';

import { ReactComponent as Css3Logo } from './assets/css3-logo.svg';
import { ReactComponent as GraphqlLogo } from './assets/graphql-logo.svg';
import { ReactComponent as Html5Logo } from './assets/html5-logo.svg';
import { ReactComponent as JavaScriptLogo } from './assets/javascript-logo.svg';
import { ReactComponent as NodejsLogo } from './assets/nodejs-logo.svg';
import { ReactComponent as ReactLogo } from './assets/react-logo.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript-logo.svg';
import { ReactComponent as NextjsLogo } from './assets/nextjs-logo.svg';
import styles from './styles.module.scss';

const Technologies = () => (
  <div className={styles.technologies}>
    <div>
      <JavaScriptLogo />
      <span>JavaScript</span>
    </div>
    <div>
      <TypescriptLogo />
      <span>TypeScript</span>
    </div>
    <div>
      <Html5Logo />
      <span>HTML5</span>
    </div>
    <div>
      <Css3Logo />
      <span>CSS3</span>
    </div>
    <div>
      <ReactLogo />
      <span>React</span>
    </div>
    <div>
      <NextjsLogo />
      <span>Next.js</span>
    </div>
    <div>
      <NodejsLogo />
      <span>Node.js</span>
    </div>
    <div>
      <GraphqlLogo />
      <span>GraphQL</span>
    </div>
  </div>
);

export default Technologies;
