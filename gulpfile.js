
var gulp = require('gulp');

var browserify = require('browserify');

var babelify = require('babelify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var factor = require('factor-bundle');
var autoprefixer = require('gulp-autoprefixer');

var markdown = require('gulp-markdown-to-json');

function compile () {
  var app = browserify({
            entries: [
              './src/scripts/jsx/app.jsx'
            ],
            extensions: ['.jsx'],
            debug: false
          })
          .transform(babelify, {
            presets: ['es2015', 'react']
          })
          .plugin(factor, {
            o: [
              'public/app.js'
            ]
          })
          .bundle()
          .pipe(source('common.js'))
          .pipe(buffer())
          .pipe(uglify())
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
gulp.task('copy', function () {
  gulp.src('./src/scripts/content/**/*.json', {base: './src/scripts/content'})
      .pipe(gulp.dest('./public'))
});

gulp.task('markdown', function(){
      gulp.src('./src/scripts/**/*.md')
        .pipe(markdown({
            pedantic: true,
            smartypants: true
        }))
        //.pipe(gulp.dest('src/scripts/content/projects/compiled/'))
        .pipe(gulp.dest('./src/scripts/'))
});

gulp.task('watch', ['build', 'sass', 'markdown', 'copy'], function () {
  gulp.watch('./src/scripts/jsx/**/*.jsx', ['build']);
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch('./src/scripts/content/**/*.md', ['markdown']);
  gulp.watch('./src/scripts/content/**/*.json', ['copy']);
});

gulp.task('minify', function () {
  gulp.src('./public/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['watch']);
