import INPUT from './core/common/input.js';
import GLOBALS from './core/common/globals.js';
import helpers from './core/common/helpers.js';
import ScreenStack from './core/common/screenStack.js'
import MainMenuScreen from './screens/mainMenuScreen.js'

window.onload = function() {
  // Get canvas info
  let canvas  = document.getElementById('main_canvas');
  GLOBALS.ctx = canvas.getContext('2d');
  GLOBALS.w = canvas.width;
  GLOBALS.h = canvas.height;

  // Initialize inputs
  INPUT.init();
  document.onkeydown = e => INPUT.keyDown(e.keyCode);
  canvas.addEventListener('click', e => INPUT.mouseClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop), false);

  // Start the loop
  ScreenStack.addScreen(new MainMenuScreen());
  window.requestAnimationFrame(loop);
}

var lastRender = 0;
function loop(timestamp) {
  let elapsedTime = timestamp - lastRender;
  lastRender = timestamp;

  helpers.updateGradient(timestamp);
  ScreenStack.draw();
  ScreenStack.update(elapsedTime);

  INPUT.reset();
  window.requestAnimationFrame(loop);
}
