import GLOBALS from '../../common/globals.js';
import INPUT from '../../common/input.js';
import collisions from '../../physics/collisions.js';

function Menu(x, y, w, h, color, options = [], padding = 2) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.padding = padding;
  this.options = options;
  this.selectedOption = 0;

  this.arrangeOptions();
}

Menu.prototype.draw = function() {
  let i, ctx = GLOBALS.ctx;
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);

  for (i in this.options) this.options[i].draw(this.selectedOption == i);
}

Menu.prototype.update = function(timeElapsed) {
  // Keyboard
  if (INPUT.keyboard.ENTER.execute()) this.options[this.selectedOption].execute();
  if (INPUT.keyboard.ARROW_UP.execute()) this.selectedOption = (this.selectedOption + this.options.length - 1) % this.options.length;
  if (INPUT.keyboard.ARROW_DOWN.execute()) this.selectedOption = (this.selectedOption + 1) % this.options.length;
  // Mouse
  if (INPUT.mouse.clicked && collisions.boxPoint(this, INPUT.mouse)) {
    for (let i in this.options) {
      if (collisions.boxPoint(this.options[i], INPUT.mouse)) {
        this.options[i].execute();
        break;
      }
    }
  }
}

Menu.prototype.arrangeOptions = function(option) {
  let i, t, h = 0;

  for (i in this.options) h += this.options[i].h + this.padding;
  t = (this.h - h) / 2;

  for (i in this.options) {
    this.options[i].y = t + this.y;
    this.options[i].x = this.x;
    this.options[i].w = this.w;
    t += this.options[i].h + this.padding;
  }
}

export default Menu;

