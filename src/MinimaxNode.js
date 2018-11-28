class MinimaxNode {

  static get DEPTH() { return 7; }

  constructor(board) {
    this.board = board;
    this.moves = [];
    this.value = 0;
  }

  buildTree(board, depth) {
    let rootNode = new MinimaxNode(board);

    if (depth > MinimaxNode.DEPTH) {
      return rootNode;
    }

    for (let b of board.availableMoves()) {
      rootNode.getMoves().push(this.buildTree(b, depth + 1));
    }

    return rootNode;
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
