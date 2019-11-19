var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
var del           = require('del');
var panini        = require('panini');

var webpack = require('webpack-stream');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

async function sass() {
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
}

async function serve() {
  browserSync.init({
    server: "./dist/"
  });

  gulp.watch("src/scss/**/*.scss", sass);
  // gulp.watch("pages/**/*.html", copyHtml).on('change', browserSync.reload);
  gulp.watch(['src/pages/{layouts,partials,helpers,data}/**/*'], panini.refresh);
  gulp.watch("src/js/**/*.js", copyJs).on('change', browserSync.reload);
}
async function copyJs() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest('dist/js'));
}
// function copyHtml() {
//     return gulp.src('pages/**/*.html')
//         .pipe(gulp.dest('dist'));
// }
async function copyAssets() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
}
async function clean() {
    return del(['dist']);
}
async function pages() {
    gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            helpers: 'src/helpers/',
            data: 'src/data/'
        }))
        .pipe(gulp.dest('dist'));
}

gulp.task('sass', sass);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('copy', gulp.series(copyJs, copyAssets));
gulp.task('default', gulp.series(clean, gulp.parallel(pages, 'sass', 'copy'), serve));
