var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var factor = require('factor-bundle');
var autoprefixer = require('gulp-autoprefixer');

function compile () {
  var app = browserify({
            entries: [
              './src/scripts/jsx/app.jsx',
              './src/scripts/jsx/jokesart.jsx',
              './src/scripts/jsx/work.jsx',
              './src/scripts/jsx/about.jsx'
            ],
            extensions: ['.jsx'],
            debug: true
          })
          .transform(babelify, {
            presets: ['es2015', 'react']
          })
          .plugin(factor, {
            o: [
              'public/app.js',
              'public/jokesart.js',
              'public/work.js',
              'public/about.js'
            ]
          })
          .bundle()
          .pipe(source('common.js'))
          .pipe(gulp.dest('public/'));

    return app;
}

function sassify () {
  return gulp.src('./src/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(gulp.dest('public/css/'));
}

gulp.task('build', function () { return compile(); });
gulp.task('sass', function () { return sassify(); });

gulp.task('watch', ['build', 'sass'], function () {
  gulp.watch('./src/scripts/jsx/**/*.jsx', ['build']);
  gulp.watch('./src/styles/**/*.scss', ['sass'])
});

gulp.task('default', ['watch']);
