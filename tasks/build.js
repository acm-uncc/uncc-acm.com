var autoprefixer = require("gulp-autoprefixer");
var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var gulp = require("./gulp");
var minify = require("gulp-minify-css");
var path = require("path");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var scss = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var strip = require("gulp-strip-comments");
var watchify = require("watchify");

var outDir = path.join(__dirname, "../build");
var production = false;

gulp.task("build", [
  "build:clean",
  "build:styles",
  "build:scripts"
]);

gulp.task("build:clean", function () {
  return gulp.src(path.join(outDir, "*"))
    .pipe(clean());
});

gulp.task("build:scripts", function () {
  var w = watchify(browserify({
    cache: {}, packageCache: {},
    debug: true
  }))
    .add(path.join(__dirname, "../scripts/index.js"))
    .on("update", bundle);

  // first
  bundle();

  function bundle () {
    w.bundle()
    .pipe(source("site.js"))
    .pipe(buffer())
    .pipe(gulp.dest(outDir))
  }
});

gulp.task("build:styles", function () {
  var stream = gulp.src([
    path.join(__dirname, "../styles/index.scss"),
    path.join(__dirname, "../members/**/styles/index.scss")
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: ["> 2%"]
    }))
    .pipe(concat("site.css"))
    .pipe(minify())
    .pipe(sourcemaps.write())
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
