import GLOBALS from '../core/common/globals.js';
import helpers from '../core/common/helpers.js';
import Menu from '../core/interface/menu/menu.js';
import TextOption from '../core/interface/menu/textOption.js';

function MainMenuScreen() {
  this.menu = new Menu(0, this.titleHeight, GLOBALS.w, GLOBALS.h - this.titleHeight, GLOBALS.menuBg, [
    new TextOption('Start', GLOBALS.fonts.menu, GLOBALS.fonts.color, function(){
      console.log(this);
    }),
    new TextOption('Options', GLOBALS.fonts.menu, GLOBALS.fonts.color, function(){
      console.log(this);
    })
  ]);
}

MainMenuScreen.prototype.update = function(elapsedTime) {
  this.menu.update(elapsedTime);
}

MainMenuScreen.prototype.draw = function() {
  let ctx = GLOBALS.ctx, text = 'MD', w, h;
  // Background
  ctx.fillStyle = GLOBALS.bg;
  ctx.fillRect(0, 0, GLOBALS.w, GLOBALS.h);
  // Title
  ctx.font = GLOBALS.fonts.menu;
  ctx.fillStyle = GLOBALS.fonts.color;

  w = ctx.measureText(text).width;
  h = helpers.fontHeight(ctx.font);
  ctx.fillText(text, (GLOBALS.w - w) / 2, (this.titleHeight + h) / 2);

  // Menu
  this.menu.draw();
}
MainMenuScreen.prototype.titleHeight = 200;
MainMenuScreen.prototype.menuPadding = 100;

export default MainMenuScreen;
