const ScreenStack = {
  stack : [],
  screenExists: () => ScreenStack.stack.length > 0,
  addScreen: screen => ScreenStack.stack.unshift(screen),
  removeScreen: () => ScreenStack.stack.shift(),
  draw: () => ScreenStack.stack[0].draw(),
  update: eT => ScreenStack.stack[0].update(eT)
}

export default ScreenStack;

