var gulp = require('gulp');
var bower = require('gulp-bower');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('bower', function() {
  return bower();
});

gulp.task('wiredep', ['bower'], function() {
  gulp.src('./views/*.ejs').pipe(wiredep({
    ignorePath: '../public'
  })).pipe(gulp.dest('./views'));
});

gulp.task('start', ['wiredep'], function() {
  nodemon({
    script: 'bin/www',
    ext: 'js html'
  });
});
