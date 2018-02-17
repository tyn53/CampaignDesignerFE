import React from 'react';
import ReactDOM from 'react-dom';

//main app
import Designer from './containers/Designer';
import { observe } from './containers/Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Designer />,
    rootEl
  )
);
