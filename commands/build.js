var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean");
var gulp = require("./gulp");
var minify = require("gulp-minify-css");
var path = require("path");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var scss = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var strip = require('gulp-strip-comments');

var outDir = path.join(__dirname, "../build");
var production = false;

gulp.task("build", [
  "build:clean",
  "build:styles"
]);


gulp.task("build:clean", function () {
  return gulp.src(path.join(outDir, "*"))
    .pipe(clean());
});

gulp.task("build:styles", function () {
  var stream = gulp.src(path.join(__dirname, "../styles/index.scss"))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: ["> 2%"]
    }))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(rename("index.css"))
    .pipe(gulp.dest(outDir));

  if (production) {
    stream = stream.pipe(strip());
  }

  stream.pipe(gulp.dest(outDir));
});

module.exports = function () {
  production = true;
  gulp.start("build");
}
