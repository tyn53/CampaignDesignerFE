import React from 'react';
import ReactDOM from 'react-dom';

//main app
import Board from './containers/Board';
import { observe } from './containers/Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);
