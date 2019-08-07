var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var Reporter = require('jasmine-console-reporter');

gulp.task('jasmine', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine({
      reporter: new Reporter()
    }));
  });