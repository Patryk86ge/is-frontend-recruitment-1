// eslint-disable-next-line jsx-a11y/href-no-hash
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  ReactDOM.render(<App />, rootElement);
}
registerServiceWorker();
