'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
const image = require('gulp-image');

const buildStyles = () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'))
};
const minifyImgs = () => {
    return gulp.src('./imgs/tominify/*')
		.pipe(image())
		.pipe(gulp.dest('./imgs'))
}

exports.default = function () {
    gulp.watch('./scss/**/*.scss', buildStyles);
    gulp.watch('./imgs/tominify/*', minifyImgs);
};