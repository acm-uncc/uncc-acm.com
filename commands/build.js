var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean");
var gulp = require("./gulp");
var path = require("path");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var scss = require("gulp-sass");

var outDir = path.join(__dirname, "../build");

gulp.task("build", [
  "build:clean",
  "build:styles"
]);

gulp.task("build:clean", function () {
  return gulp.src(path.join(outDir, "*"))
    .pipe(clean());
});

gulp.task("build:styles", function () {
  gulp.src(path.join(__dirname, "../styles/index.scss"))
    .pipe(plumber())
    .pipe(scss())
    .pipe(rename("index.css"))
    .pipe(gulp.dest(outDir));
});

module.exports = function () {
  gulp.start("build");
}
