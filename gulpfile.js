var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

gulp.task('copyIndex', function () {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('compileBabelWithBrowserify', function() {
  var bundler = watchify(browserify('./app/index.js', { debug: true }).transform(babel));

  return bundler.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('optimize', ['compileBabelWithBrowserify'], function () {
  gulp.src('./build/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', function () {
  return gulp.src(['./app/**/*.js'])
    .pipe(eslint({
      rules: {
        'no-trailing-spaces': 1,
        quotes: [1, "single", "avoid-escape"]
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('buildVerifiedJavascript', ['lint', 'compileBabelWithBrowserify']);

gulp.task('sass', function () {
  return gulp.src('./app/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'));
});

gulp.task('watch', ['copyIndex', 'buildStyles', 'buildVerifiedJavascript'], function () {
  gulp.watch(['./app/index.html'], ['copyIndex']);
  gulp.watch('./app/style/*.scss', ['buildStyles']);
  gulp.watch('./app/**/*.js', ['buildVerifiedJavascript']);
});

gulp.task('buildJavascript', ['buildVerifiedJavascript', 'optimize']);
gulp.task('buildStyles', ['sass']);

gulp.task('build', ['copyIndex', 'buildJavascript', 'buildStyles']);

gulp.task('default', ['build']);
