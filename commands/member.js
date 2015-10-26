// import node modules
var fs = require("fs");
var path = require("path");

var name;
var membersdir = path.join(__dirname, "../members/");

function create () {
  var readdir = path.join(__dirname, "../templates/member");
  var writedir = path.join(membersdir, name);

  // generate members dir if it does not exist
  if (!fs.existsSync(membersdir)) fs.mkdirSync(membersdir);

  // check if member already exists
  if (fs.existsSync(writedir)) return console.error("Member already exists!");

  // create new member folder
  fs.mkdirSync(writedir);

  // copy files from template to new member dir
  fs.readdir(readdir, function (err, filenames) {
    filenames.forEach(function (filename) {
      var file = fs.createReadStream(path.join(readdir, filename));
      var write = fs.createWriteStream(path.join(writedir, filename));
      file.pipe(write);
    });
  });
}

function remove () {

}

module.exports = function () {
  if (process.argv[3] === "-d") {
    name = process.argv[4];
    var action = remove;
  } else {
    name = process.argv[3];
    var action = create;
  }

  if (name) {
    action();
  } else {
    console.log("Please enter a valid name!");
  }
}
