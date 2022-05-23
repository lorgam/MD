const path = require('path');

let mode = 'production';
let entry = './game/index.js';
let filename = 'main.js';
let filepath = path.resolve(__dirname, 'dist');
let devtool = false;

module.exports = {
  mode : mode,
  entry : entry,
  output : {
    filename : filename,
    path : filepath
  },
  devtool : devtool
};
