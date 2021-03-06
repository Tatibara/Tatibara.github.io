import './scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import TagManager from 'react-gtm-module';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './scss/_overwrites.scss';

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTMID,
  auth: process.env.REACT_APP_AUTH,
  preview: process.env.REACT_APP_PREVIEW,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
