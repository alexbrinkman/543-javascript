import React, { Component } from 'react';
import Piece from './Piece.js';

class BoardDisplay extends Component {

  render() {
    return (
      <div className="App">
        {this.displayBoard()}
        <button onClick={this.props.makeMoveHandler} disabled={this.props.gameOver} className={this.buttonClass()}>Move</button>
        <div className="message">{this.props.message}</div>
      </div>
    )
  }

  displayBoard() {
    let board = []
    for (let i = 0; i < this.props.position.length; i++) {
      let pieces = []
      for (let j = 0; j < this.props.position[i].length; j++) {
        pieces.push(<Piece key={j} value={this.props.position[i][j]} handler={this.props.togglePositionHandler} row={i} number={j} />)
      }
      board.push(<div className="row" key={i}>{pieces}</div>)
    }
    return board;
  }

  buttonClass() {
    return this.props.gameOver ? 'hidden' : '';
  }

}

export default BoardDisplay;