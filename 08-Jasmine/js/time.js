var Time = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),
  displayMilitaryTime: function() {
    console.log('Right now the time is ' + this.hours + ':' + this.minutes + ':' + this.seconds + ' military time');
    return new Date(new Date().getFullYear(), new Date().getMonth(), this.hours, this.minutes, this.seconds);
  },
  displayDaysUntilChristmas: function() {
    // Christmas Date
    var christmas = new Date(new Date().getFullYear(), 11, 25);
    if (new Date().getMonth() === 11 && new Date().getDate() > 25) {
      // Set the full year of Christmas if it's past Decembember 25th
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    var oneDay = 24 * 60 * 60 * 1000;
    console.log(Math.ceil((christmas.getTime() - new Date().getTime()) / (oneDay))+ ' days until Christmas');
    return Math.ceil((christmas.getTime() - new Date().getTime()) / (oneDay));
  }
}

module.exports = Time;
