var gulp    = require('gulp'),
    rsass   = require('gulp-ruby-sass'),
    util    = require('gulp-util'),
    watch   = require('gulp-watch'),
    concat  = require('gulp-concat-util'),
    browserify = require('gulp-browserify');

var paths = {
  scss: './components/**/index.scss',
  js: './SignalUI.js'
}

gulp.task('css', function() {
  return gulp.src( paths.scss )
    .pipe(rsass({
      trace: false,
      sourcemapPath: './',
      bundleExec: true,
      require: ['bourbon', 'susy', 'modular-scale'],
    }))
    .pipe( concat('SignalUI.css') )
    .pipe( gulp.dest('./build') );
});

gulp.task('js', function() {
  return gulp.src( paths.js )
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe( gulp.dest('./build') );
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
