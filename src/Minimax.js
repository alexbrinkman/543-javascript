import MinimaxNode from './MinimaxNode.js';

class Minimax {

  constructor(board) {
    this.board = board;
  }

  search() {
    console.log("Building tree...");
    let rootNode = new MinimaxNode(this.board).buildTree(this.board, 0);

    console.log("Evaluating positions...");
    rootNode = this.assignNodeValues(rootNode, "max");

    console.log("Making best move...");
    let move = this.bestNextMove(rootNode, "max")[1];
    return move.getBoard();
  }

  assignNodeValues(rootNode, maxMin) {
    for (let node of rootNode.getMoves()) {
      if (node.getBoard().winner()) {
        node.setValue(this.valueOfWin(maxMin));
      }
      else {
        this.assignNodeValues(node, this.flipMaxMin(maxMin));
        node.setValue(this.bestNextMove(node, this.flipMaxMin(maxMin))[0]);
      }
    }

    return rootNode;
  }

  bestNextMove(node, minMax) {
    if (!node.getMoves().length) {
      return [0, null];
    }

    let bestMoveValue = node.getMoves()[0].getValue();
    let bestMove = node.getMoves()[0];

    for (let move of node.getMoves()) {
      if (minMax === "max") {
        if (move.getValue() > bestMoveValue) {
          bestMoveValue = move.getValue();
          bestMove = move;
        }
      }
      else {
        if (move.getValue() < bestMoveValue) {
          bestMoveValue = move.getValue();
          bestMove = move;
        }
      }
    }

    return [bestMoveValue, bestMove];
  }

  flipMaxMin(maxMin) {
    return maxMin === "max" ? "min" : "max";
  }

  valueOfWin(maxMin) {
    return maxMin === "max" ? 1 : -1;
  }

}

export default Minimax;
