import GLOBALS from '../core/common/globals.js';
import helpers from '../core/common/helpers.js';

function MainMenuScreen() {}

MainMenuScreen.prototype.update = function(elapsedTime) {
}

MainMenuScreen.prototype.draw = function() {
  let ctx = GLOBALS.ctx;
  ctx.fillStyle = GLOBALS.bg;
  ctx.fillRect(0, 0, GLOBALS.w, GLOBALS.h);

  let g = helpers.lerp(0, 200, helpers.gradient);
  ctx.fillStyle = `rgb(255, ${g}, ${g})`;
  ctx.font      = GLOBALS.fonts.menu;

  let text = 'MD';
  ctx.fillText(text, (GLOBALS.w - ctx.measureText(text).width) / 2, (GLOBALS.h - 30) / 2);
}

export default MainMenuScreen;
