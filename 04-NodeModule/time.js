var currentDate = new Date();

var Time = function() {};

Time.prototype = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),
  displayMilitaryTime: function() {
    console.log('Right now the time is ' + this.hours + ':' + this.minutes + ':' + this.seconds + ' military time');
  },
  
}

module.exports = Time;
