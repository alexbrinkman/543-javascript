import Minimax from './Minimax.js';

class Search {

  constructor(board) {
    this.board = board;
  }

  findMove() {
    console.log("Searching...");
    return new Minimax(this.board).search();
  }

}

export default Search;
