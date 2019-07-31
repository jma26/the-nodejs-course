var Time = require('./time.js');

var currentTimer = new Time();

console.log('Current hour is ', currentTimer.hours);
console.log('Current minute is', currentTimer.minutes);
console.log('Current second is', currentTimer.seconds);
currentTimer.displayMilitaryTime();
currentTimer.displayDaysUntilChristmas();