var cp = require("child_process");
var gulp = require("./gulp");
var path = require("path");

// import other gulp commands
require("./build");

var pid;

gulp.task("develop", [
  "watch",
  "restart",
]);

gulp.task("watch", ["build"], function () {
  // server
  gulp.watch([
    path.join(__dirname, "../package.json"),
    path.join(__dirname, "../server/**/*"),
    path.join(__dirname, "../members/**/server/**/*"),
  ], [
    "restart"
  ]);

  // styles
  gulp.watch([
    path.join(__dirname, "../styles/**/*"),
    path.join(__dirname, "../members/**/styles/**/*")
  ], [
    "build:styles"
  ]);
});

gulp.task("restart", function () {
  if (pid) {
    pid.kill('SIGHUP');
    console.log("\n[Restarting Server]")
  }
  pid = cp.fork(path.join(__dirname, ".."));
})

module.exports = function () {
  gulp.start("develop");
}
