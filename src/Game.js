import Board from './Board.js';
import Minimax from './Minimax.js';
import Result from './Result.js';

class Game {

  constructor(position) {
    this.board = new Board(position);
  }

  run() {
    if (this.board.winner()) {
      return new Result(this.board, true, 'You win!');
    }

    this.makeMove();
    if (this.board.winner()) {
      return new Result(this.board, true, 'Computer wins.');
    }
    return new Result(this.board, false, '');
  }

  makeMove() {
    this.board = new Minimax(this.board).search();
  }

}

export default Game;
