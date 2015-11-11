// import node modules
var clean = require("gulp-clean");
var fs = require("fs");
var gulp = require("gulp");
var map = require("vinyl-map");
var path = require("path");

var name,
    membersdir,
    readdir,
    writedir;

function init () {
  membersdir = path.join(__dirname, "../members/");
  readdir = path.join(__dirname, "../templates/member");
  writedir = path.join(membersdir, name);
}

function create () {
  // generate members dir if it does not exist
  if (!fs.existsSync(membersdir)) fs.mkdirSync(membersdir);

  // check if member already exists
  if (fs.existsSync(writedir)) return console.error("Member already exists!");

  // create new member folder
  fs.mkdirSync(writedir);

  // copy files from template to new member dir
  gulp.src(path.join(readdir, "**/*"))
    .pipe(map(function (content) {
      return content.toString().replace(/~/g, name);
    }))
    .pipe(gulp.dest(writedir))
    .on("end", function () {
      console.log("New member '" + name + "' has been created!");
    });
}

function remove () {
  gulp.src(writedir)
    .pipe(clean());
}

if (process.argv[2] === "remove") {
  name = process.argv[3];
  var action = remove;
} else {
  name = process.argv[2];
  var action = create;
}

if (name) {
  init();
  action();
} else {
  console.log("Please enter a valid name!");
}
