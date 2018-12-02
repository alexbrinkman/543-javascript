class Result {

  constructor(board, gameOver, message) {
    this.board = board;
    this.gameOver = gameOver;
    this.message = message;
  }

  getBoard() {
    return this.board;
  }

  getGameOver() {
    return this.gameOver;
  }

  getMessage() {
    return this.message;
  }

}

export default Result;
