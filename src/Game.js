import Board from './Board.js';
import Search from './Search.js';

class Game {

  constructor(position) {
    this.board = new Board(null);
    this.whosMove = "Human";
  }

  run() {
    console.log(this.board.toString());
    while(true) {
      try {
        this.makeMove();
        if (this.board.winner()) {
          console.log(this.whosMove + " wins!");
          return;
        }
        this.switchPlayers();
      }
      catch (e) {
        console.error(e);
        console.error(this.board.toString());
      }
    }
  }

  makeMove() {
    if (this.whosMove === "Human") {
      let move = this.promptForMove();
      this.board.move(move[0], move[1]);
    }
    else {
      this.board = new Search(this.board).findMove();
    }
    console.log(this.board.toString());
  }

  promptForMove() {
    console.log("Your move: (row)");
    let row = prompt("Enter row"); // Verify that this is an int.
    console.log("Your move: (number)");
    let num = prompt("Enter number"); // Verify that this is an int.
    return [row, num];
  }

  switchPlayers() {
    this.whosMove = this.whosMove === "Human" ? "Computer" : "Human";
  }

}

export default Game;
