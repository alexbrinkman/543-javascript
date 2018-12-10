class MinimaxNode {

  constructor(board) {
    this.board = board;
    this.moves = [];
    this.value = 0;
  }

  getBoard() {
    return this.board;
  }

  setBoard(board) {
    this.board = board;
  }

  getMoves() {
    return this.moves;
  }

  setMoves(moves) {
    this.moves = moves;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

}

export default MinimaxNode;
