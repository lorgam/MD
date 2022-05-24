import GLOBALS from '../core/common/globals.js';
import Menu from '../core/interface/menu/menu.js';
import TextOption from '../core/interface/menu/textOption.js';

function MainMenuScreen() {
  this.menu = new Menu(0, 0, GLOBALS.w, GLOBALS.h, GLOBALS.bg, [
    new TextOption('Start', GLOBALS.fonts.menu, function(){console.log(this);}),
    new TextOption('Options', GLOBALS.fonts.menu, function(){console.log(this);})
  ]);
}

MainMenuScreen.prototype.update = function(elapsedTime) {
  this.menu.update(elapsedTime);
}

MainMenuScreen.prototype.draw = function() {
  this.menu.draw();
}

export default MainMenuScreen;
