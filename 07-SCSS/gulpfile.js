var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
})

gulp.task('browserSync', function() {
  return browserSync.init({
    server: {
      baseDir: './'
    },
  });
});

// For the longest time, it was not watching and reloading scss changes
// Instead of gulp.series, it was gulp.parallel that did the trick... smh
gulp.task('default', gulp.parallel('browserSync', 'sass', function(done) {
  gulp.watch('*.scss', gulp.series('sass'));
  gulp.watch('*.html', gulp.series('browserSync'));
  done();
}))