var gulp = require('gulp');
var gulpBower = require('gulp-bower');
var eslint = require('gulp-eslint');

//var sass = require('gulp-sass');

//gulp.task('sass', function () {
//  return gulp.src('./src/site/style/*.scss')
//    .pipe(sass())
//    .pipe(gulp.dest('./build/site/style'));
//});

gulp.task('bowerInstall', function() {
  return gulpBower({ cwd: './src/site/', directory: './bower_components', cmd: 'install' });
});

gulp.task('bowerLibs', ['bowerInstall'], function() {
  var lib = require('bower-files')({
    json: './src/site/bower.json',
    dir: './src/site/bower_components',
    overrides: {
      react: {
        main: ['react.js', 'JSXTransformer.js'],
        dependencies: {}
      }
    }
  });

  return gulp.src(lib.ext('js').files)
    .pipe(gulp.dest('./build/site/lib/'))
});

gulp.task('lint', function() {
  return gulp.src(['./src/site/static/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('distLibs', ['bowerLibs', 'lint'], function() {
  return gulp.src('./build/site/lib/*.js')
    .pipe(gulp.dest('./dist/public/lib'));
});

gulp.task('distSources', ['lint'], function() {
  return gulp.src(['./src/site/*.*', './src/site/static/*.*'])
    .pipe(gulp.dest('./dist/public'));
});

gulp.task('distStyles', function() {
  return gulp.src(['./build/site/style/*.css'])
    .pipe(gulp.dest('./dist/public/style'));
});

gulp.task('build', ['distLibs', 'distSources', 'distStyles']);
