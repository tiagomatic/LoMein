var gulp    = require('gulp'),
    path    = require('path'),
    fs      = require('fs'),
    concat  = require('gulp-concat-util'),
    sass    = require('gulp-sass');

gulp.task('css', function() {
  return gulp.src('./components/**/index.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(concat('SignalUI.css'))
    .pipe(concat.header(fs.readFileSync(path.join(__dirname, '../node_modules/normalize.css/normalize.css'))))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});
