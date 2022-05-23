const INPUT = {
  keyboard  : {aux:{}},
  mouse   : {
    x:0,
    y:0,
    clicked:false
  },

  init : function() {
    INPUT.keyboard.ARROW_LEFT   = new inputKey(37);
    INPUT.keyboard.ARROW_UP     = new inputKey(38);
    INPUT.keyboard.ARROW_RIGHT  = new inputKey(39);
    INPUT.keyboard.ARROW_DOWN   = new inputKey(40);

    INPUT.keyboard.ENTER       = new inputKey(13);
    INPUT.keyboard.ALT         = new inputKey(18);
    INPUT.keyboard.ESC         = new inputKey(27);
    INPUT.keyboard.SPACE       = new inputKey(32);

    INPUT.keyboard.O           = new inputKey(79);
    INPUT.keyboard.C           = new inputKey(67);
    INPUT.keyboard.V           = new inputKey(86);
    INPUT.keyboard.T           = new inputKey(84);
  },

  keyDown : function(keyCode) {
    let key = INPUT.keyboard.aux[keyCode];
    if (key) key.keyDown();
  },

  mouseClick : function(x,y) {
    INPUT.mouse.clicked   = true;
    INPUT.mouse.x         = x;
    INPUT.mouse.y         = y;
  },

  reset : function() {
    Object.keys(INPUT.keyboard).forEach((k, v) => {if (INPUT.keyboard[k].execute) INPUT.keyboard[k].execute();});
    INPUT.mouse.clicked = false;
  }
};

function inputKey(keyCode) {
  this.isPressed              = false;
  this.keyCode                = keyCode;
  INPUT.keyboard.aux[keyCode] = this;
}

inputKey.prototype.keyDown = function() {
  this.isPressed = true;
}

inputKey.prototype.execute = function() {
  if (this.isPressed) {
    this.isPressed = false;
    return true;
  }
  return false;
}

export default INPUT;
