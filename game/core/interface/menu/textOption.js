import GLOBALS from '../../common/globals.js';
import helpers from '../../common/helpers.js';

function TextOption(text, font, callback) {
  this.text = text;
  this.font = font;
  this.callback = callback;

  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = helpers.fontHeight(this.font);
}

TextOption.prototype.draw = function(selected) {
  let ctx = GLOBALS.ctx, width;
  ctx.font = this.font;

  if (selected) {
    let g = helpers.lerp(0, 200, helpers.gradient);
    ctx.fillStyle = `rgb(255, ${g}, ${g})`;
  } else {
    ctx.fillStyle = '#F00';
  }

  width = ctx.measureText(this.text).width;
  ctx.fillText(this.text, this.x + (this.w - width) / 2, this.y);
}

TextOption.prototype.execute = function() {
  this.callback();
}

export default TextOption;
