module.exports = function ( $, gulp ){

  gulp.task('css', function() {
    return gulp.src('./components/**/index.scss')
      .pipe($.rubySass({
        errLogToConsole: true
      }))
      .pipe(concat('SignalUI.css'))
      .pipe(concat.header(fs.readFileSync('./node_modules/normalize.css/normalize.css')))
      .pipe(gulp.dest('./build'))
      .pipe(gulp.dest('./build/docs'));
  });

}
