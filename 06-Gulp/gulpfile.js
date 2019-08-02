var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jsLint', function() {
  gulp.src(__dirname + '/js/demo.js')
  .pipe(jshint())
  .pipe(jshint.reporter());
});