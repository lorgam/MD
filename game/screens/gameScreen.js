import GLOBALS from '../core/common/globals.js';
import helpers from '../core/common/helpers.js';
import GameState from '../state/gameState.js';

function GameScreen() {
  this.state = new GameState();
}

GameScreen.prototype.update = function(elapsedTime) {
  this.state.update(elapsedTime);
}

GameScreen.prototype.draw = function() {
  let ctx  = GLOBALS.ctx,
    hour   = `0${this.state.clock.getHour()}`.slice(-2),
    minute = `0${this.state.clock.getMinute()}`.slice(-2),
    text   = `${hour}:${minute}`,
    w;
  // Background
  ctx.fillStyle = GLOBALS.bg;
  ctx.fillRect(0, 0, GLOBALS.w, GLOBALS.h);
  // Clock
  ctx.font = GLOBALS.fonts.menu;
  ctx.fillStyle = GLOBALS.fonts.color;
  w = ctx.measureText(text).width;
  ctx.fillText(text, GLOBALS.w - w, GLOBALS.h);
}

export default GameScreen;
