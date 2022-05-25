import Clock from './clock.js';

function GameState() {
  this.clock = new Clock();
}

GameState.prototype.update = function(elapsedTime) {
  this.clock.update(elapsedTime);
}

export default GameState;
