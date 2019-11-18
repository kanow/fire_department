var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
var del = require('del');

var webpack = require('webpack-stream');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];
var foundationPath = 'node_modules/foundation-sites/';

function sass() {
  return gulp.src('src/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
    ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
};

function serve() {
  browserSync.init({
    server: "./dist/"
  });

  gulp.watch("src/scss/**/*.scss", sass);
  gulp.watch("templates/**/*.html", copyHtml).on('change', browserSync.reload);
  gulp.watch("src/js/**/*.js", copyJs).on('change', browserSync.reload);
}
function copyJs() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest('dist/js'));
}
function copyHtml() {
    return gulp.src('templates/**/*.html')
        .pipe(gulp.dest('dist'));
}
function copyAssets() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
}
function clean() {
    return del(['dist']);
}

gulp.task('sass', sass);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('copy', gulp.series(copyJs, copyHtml, copyAssets));
gulp.task('default', gulp.series(clean, 'sass', 'copy', serve));
