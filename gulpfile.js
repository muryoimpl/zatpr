const postcss      = require('gulp-postcss');
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const concat       = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const watch        = require('gulp-watch');
const mqpacker     = require('css-mqpacker');
const plumber      = require('gulp-plumber');
const propsorter   = require('css-property-sorter');
const rucksack     = require('rucksack-css');

const paths = {
  scss: './assets/css/**/*.scss',
  css: './assets/css/'
};

const processors = [
  autoprefixer({ browsers: ['last 2 Chrome versions'] }),
  mqpacker,
  rucksack,
  propsorter({ order: 'smaccs' })
];

gulp.task('scss:fmt', () => {
  return gulp.src(paths.scss).
    pipe(postcss(processors)).
    pipe(gulp.dest(paths.css));
});


gulp.task('css', () => {
  return gulp.src(paths.scss).
    pipe(plumber()).
    pipe(sourcemaps.init()).
    pipe(sass({ outputStyle: 'compressed' })).
    pipe(postcss(processors)).
    pipe(concat('main.css')).
    pipe(sourcemaps.write()).
    pipe(gulp.dest(paths.css));
});

gulp.task('watch', () => {
  watch(paths.scss, () => {
    gulp.start('css');
  });
});
