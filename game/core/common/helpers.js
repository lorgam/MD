const helpers = {
  gradient  : 0,
  lerp: (a, b, x) => a + x * (b - a),
  fontHeight: font => parseInt(font.match(/\d+/)), //Requires the fonts to be specified in px
  updateGradient: t => {helpers.gradient = Math.sin(t * 0.003)*0.5 + 0.5;}
}

export default helpers;
