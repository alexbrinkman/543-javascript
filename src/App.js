import React, { Component } from 'react';
import Game from './Game.js';
import BoardDisplay from './BoardDisplay.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: [
        [true, true, true],
        [true, true, true, true],
        [true, true, true, true, true]
      ],
      gameOver: false,
      message: ''
    };

    this.togglePosition = this.togglePosition.bind(this);
    this.makeMove = this.makeMove.bind(this);
  }

  render() {
    return (
      <BoardDisplay position={this.state.position} gameOver={this.state.gameOver} message={this.state.message}
        makeMoveHandler={this.makeMove} togglePositionHandler={this.togglePosition} />
    )
  }

  togglePosition(row, number) {
    try {
      this.validateSelection(row, number);
      let newPosition = Object.assign([], this.state.position);
      newPosition[row][number] = newPosition[row][number] ? false : true
      this.setState({ position: newPosition, message: '' });
    }
    catch(e) {
      this.setState({ position: this.state.position, message: e.message });
    }
  }

  makeMove() {
    try {
      this.validateMove();
      let newPosition = this.removeFalses();
      this.setState({ position: newPosition, message: '' });
      let result = new Game(newPosition).run();
      this.setState(
        { position: result.getBoard().position,
          gameOver: result.getGameOver(),
          message: result.getMessage()
        }
      );
    }
    catch(e) {
      this.setState({ position: this.state.position, message: e.message });
    }

  }

  removeFalses() {
    let newPosition = []
    for (let i = 0; i < this.state.position.length; i++) {
      let row = this.state.position[i].filter(Boolean);
      newPosition.push(row);
    }
    return newPosition;
  }

  validateSelection(row, number) {
    for (let i = 0; i < this.state.position.length; i++) {
      if (i === row) { continue; }
      if (this.state.position[i].filter(e => !e).length > 0) {
        throw new TypeError('You may only take pieces from one row.');
      }
    }
  }

  validateMove() {
    var flatPosition = this.state.position.reduce(function(prev, curr) {
      return prev.concat(curr);
    });

    if (flatPosition.filter(e => e).length === 0) {
      throw new TypeError('You may not take all remaining pieces.')
    }

    if (flatPosition.filter(e => !e).length === 0) {
      throw new TypeError('You must select at least one piece.')
    }
  }

}

export default App;
