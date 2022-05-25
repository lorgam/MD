function Clock() {
  this.resetDay();
}

Clock.prototype.realTimeToGameTimeFactor = 15 / 1000; // 1 hour of game every 4 minutes

Clock.prototype.update = function(elapsedTime) {
  this.seconds += elapsedTime * this.realTimeToGameTimeFactor;
}

Clock.prototype.resetDay = function() {
  this.seconds = 8*3600;
}

Clock.prototype.getHour = function() {
  return (~~(this.seconds/3600)) % 24;
}

Clock.prototype.getMinute = function() {
  return ~~((this.seconds%3600)/60);
}

export default Clock;
