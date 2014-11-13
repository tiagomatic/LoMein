var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    util    = require('gulp-util'),
    watch   = require('gulp-watch'),
    concat  = require('gulp-concat-util'),
    browserify = require('gulp-browserify');

gulp.task('css', function() {
  gulp.src('./components/**/index.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(concat('SignalUI.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
  gulp.src('./SignalUI.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('docs', function() {

});

gulp.task('test', function() {

});

gulp.task('default', ['css', 'js', 'docs']);

gulp.task('watch', function() {
  watch(['components/**/*'], function() {
    gulp.start('default');
  });
});
