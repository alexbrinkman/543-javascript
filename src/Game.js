import Board from './Board.js';
import Search from './Search.js';

class Game {

  constructor(position) {
    this.board = new Board(position);
  }

  run() {
    console.log(this.board.toString());
    if (this.board.winner()) {
      console.log('Human wins!');
      return this.board;
    }

    this.makeMove();
    console.log(this.board.toString());
    if (this.board.winner()) {
      console.log('Computer wins!');
    }
    return this.board;
  }

  makeMove() {
    this.board = new Search(this.board).findMove();
  }

}

export default Game;
