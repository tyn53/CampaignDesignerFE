import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import {canMoveKnight, moveKnight} from './Game';

export default class Board extends Component {
  renderSquare (i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x===knightX && y === knightY) ? <Knight /> : null;

    return (
      <div key={i}
           style={{width: '12.5%', height: '30px'}}
           onClick={() => this.handleSquareClick(x,y)}>
        <Square black={black}>
          {piece}&nbsp;
        </Square>
      </div>
    );
  }

  handleSquareClick(toX, toY) {
    if(canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }

  }

  render () {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div style = {{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.PropTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};
