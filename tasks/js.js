var gulp        = require('gulp'),
    browserify  = require('gulp-browserify');

gulp.task('js', function() {
  gulp.src('./client/SignalUI.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});
