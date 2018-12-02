import React, { Component } from 'react';
import Game from './Game.js';
import Piece from './Piece.js';

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

  togglePosition(row, number) {
    // TODO: toggle back on any other row that happened to be clicked too.
    let newPosition = Object.assign([], this.state.position);
    newPosition[row][number] = newPosition[row][number] ? false : true
    this.setState({ position: newPosition, gameOver: false, message: '' });
  }

  makeMove() {
    let newPosition = this.removeFalses();
    this.setState({ position: newPosition, gameOver: false, message: '' });
    let result = new Game(newPosition).run();
    this.setState(
      { position: result.getBoard().position,
        gameOver: result.getGameOver(),
        message: result.getMessage()
      }
    );

  }

  displayBoard() {
    let board = []
    for (let i = 0; i < this.state.position.length; i++) {
      let pieces = []
      for (let j = 0; j < this.state.position[i].length; j++) {
        pieces.push(<Piece key={j} value={this.state.position[i][j]} handler={this.togglePosition} row={i} number={j} />)
      }
      board.push(<div className="row" key={i}>{pieces}</div>)
    }
    return board;
  }

  render() {
    return (
      <div className="App">
        {this.displayBoard()}
        <button onClick={this.makeMove} disabled={this.state.gameOver}>Move</button>
        <div>{this.state.message}</div>
      </div>
    )
  }

  removeFalses() {
    let newPosition = []
    for (let i = 0; i < this.state.position.length; i++) {
      let row = this.state.position[i].filter(Boolean);
      newPosition.push(row);
    }
    return newPosition;
  }
}

export default App;
