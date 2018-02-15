import React from 'react';
import ReactDOM from 'react-dom';

//main app
import Campaign from './containers/Campaign';
import { observe } from './containers/Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Campaign />,
    rootEl
  )
);
