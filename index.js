import React from 'react';
import ReactDOM from 'react-dom';

//main app
import App from './containers/App';
//import { observe } from './containers/Game';

const rootEl = document.getElementById('root');

//observe(knightPosition =>
  ReactDOM.render(
    <App />,
    rootEl
  );
//);
