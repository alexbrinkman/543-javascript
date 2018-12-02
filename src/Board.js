class Board {

  constructor(position) {
    this.position = position;
  }

  move(row, num) {
    this.validateMove(row, num);
    this.updateBoard(row - 1, num);
  }

  winner() {
    return this.totalPiecesLeft() === 1;
  }

  availableMoves() {
    // One move for each piece of each row, unless there are only pieces left in one row.
    let boards = [];
    let startAt = this.oneRowLeft() ? 1 : 0;
    for(let i = 0; i < this.position.length; i++) {
      let row = this.position[i];
      for(let j = startAt; j < row.length; j++) {
        let newPosition = Object.assign([], this.position); // Clone to new array.
        newPosition[i] = this.createRow(j);
        boards.push(new Board(newPosition));
      }
    }
    return boards;
  }

  toString() {
    let str = '---------\n';
    for (let i = 0; i < this.position.length; i++) {
      str += 'row ' + (i + 1) + ': ';
      let row = this.position[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j]) {
          str += 'O ';
        }
      }
      str += '\n';
    }
    str += '---------';
    return str;
  }

  // TODO: this should move to the UI layer.
  validateMove(row, num) {
    if (row < 1 || row > this.position.length) {
      throw new TypeError('Invalid row: please enter 1-' + this.position.length + '.');
    }

    if (num < 1) {
      throw new TypeError('Invalid number: please enter at least 1 piece.');
    }

    if (num > this.piecesLeftInRow(row - 1)) {
      throw new TypeError('Invalid number: please enter no more than the number remaining in the row.');
    }

    if (num >= this.totalPiecesLeft()) {
      throw new TypeError('Invalid number: you may not take all remaining pieces.');
    }
  }

  piecesLeftInRow(row) {
    let boardRow = this.position[row];
    return boardRow.filter(e => e).length;
  }

  totalPiecesLeft() {
    let count = 0;
    for (let i = 0; i < this.position.length; i++) {
      count += this.piecesLeftInRow(i);
    }
    return count;
  }

  oneRowLeft() {
    for (let i = 0; i < this.position.length; i++) {
      if (this.piecesLeftInRow(i) === this.totalPiecesLeft()) {
        return true;
      }
    }
    return false;
  }

  updateBoard(row, num) {
    let piecesLeft = this.piecesLeftInRow(row) - num;
    this.position[row] = Array(piecesLeft).fill(true);
  }

  createRow(pieces) {
    return Array(pieces).fill(true);
  }

}

export default Board;
