var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sass = require('gulp-sass');

function compile () {
  return browserify({
            entries: [
              './src/scripts/jsx/app.jsx',
              './src/scripts/jsx/work.jsx',
              './src/scripts/jsx/jokesart.jsx'
            ],
            extensions: ['.jsx'],
            debug: true
          })
          .transform(babelify, {
            presets: ['es2015', 'react']
          })
          .bundle()
          .pipe(source('app.js'))
          .pipe(gulp.dest('public'));
}

function sassify () {
  return gulp.src('./src/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('public/css/'));
}

gulp.task('build', function () { return compile(); });
gulp.task('sass', function () { return sassify(); });

gulp.task('watch', ['build', 'sass'], function () {
  gulp.watch('./src/scripts/jsx/**/*.jsx', ['build']);
  gulp.watch('./src/styles/**/*.scss', ['sass'])
});

gulp.task('default', ['watch']);
