var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var Reporter = require('jasmine-console-reporter');

gulp.task('jasmine', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine({
      reporter: new Reporter()
    }));
  });

gulp.task('default', gulp.series('jasmine', function(done) {
  gulp.watch('js/*.js', gulp.series('jasmine'));
  done();
}))