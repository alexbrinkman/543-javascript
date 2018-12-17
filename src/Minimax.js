import MinimaxNode from './MinimaxNode.js';

class Minimax {
  static get DEPTH() {
    return 8;
  }

  constructor(board) {
    this.board = board;
  }

  search() {
    console.log('Building tree...');
    let rootNode = this.buildTree(this.board, 0);

    console.log('Evaluating positions...');
    rootNode = this.assignNodeValues(rootNode, 'max');

    console.log('Making best move...');
    let move = this.bestNextMove(rootNode, 'max')[1];
    return move.getBoard();
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

  assignNodeValues(rootNode, maxMin) {
    for (let node of rootNode.getMoves()) {
      if (node.getBoard().winner()) {
        node.setValue(this.valueOfWin(maxMin));
      } else {
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
      if (minMax === 'max') {
        if (move.getValue() > bestMoveValue) {
          bestMoveValue = move.getValue();
          bestMove = move;
        }
      } else {
        if (move.getValue() < bestMoveValue) {
          bestMoveValue = move.getValue();
          bestMove = move;
        }
      }
    }

    return [bestMoveValue, bestMove];
  }

  flipMaxMin(maxMin) {
    return maxMin === 'max' ? 'min' : 'max';
  }

  valueOfWin(maxMin) {
    return maxMin === 'max' ? 1 : -1;
  }
}

export default Minimax;
