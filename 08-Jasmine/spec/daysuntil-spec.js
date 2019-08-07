var Time = require('../js/time.js');

describe('Time', function() {
  it('Calculate the appropriate hour right now', function() {
    expect(Time.hours).toBe(new Date().getHours());
  })
  it('Calculate the appropriate minutes right now', function() {
    expect(Time.minutes).toBe(new Date().getMinutes());
  })
  it('Calculate the appropriate seconds right now', function() {
    expect(Time.seconds).toBe(new Date().getSeconds());
  })
  it('Calculate a non-zero number of days', function() {
    expect(Time.displayDaysUntilChristmas()).toBeGreaterThan(0);
    expect(Time.displayDaysUntilChristmas()).toBeLessThan(366);
  });
  it('Display the appropriate military time', function() {
    expect(Time.displayMilitaryTime()).toEqual(new Date(new Date().getFullYear(), new Date ().getMonth(), Time.hours, Time.minutes, Time.seconds));
  });
})