var gulp = require('gulp');

require('./tasks/css');
require('./tasks/js');

gulp.task('default', ['css', 'js']);
