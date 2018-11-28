import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {

  start() {
    new Game().run();
  }

  render() {
    return (
      <div className="App">
        View the browser's development tools to play the game.
        <button onClick={this.start}>Start</button>
      </div>
    );
  }
}

export default App;
