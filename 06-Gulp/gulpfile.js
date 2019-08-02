var gulp = require('gulp');
var jshint = require('gulp-jshint');

// Gulp Task to manually jsLint
gulp.task('jsLint', function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter());
});

// Setup default behavior of gulp when 'gulp' cmd is executed
gulp.task('default', gulp.series('jsLint', function() {
  return gulp.watch('js/*.js', gulp.series('jsLint'));
}));
