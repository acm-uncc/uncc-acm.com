var fs = require('fs');
var path = require('path');

var out = [];

function search (file, fixBase) {
  if (!fs.lstatSync(file).isDirectory()) {
    out.push(file);
  } else {
    fs.readdirSync(file).forEach(function (child) {
      search(path.join(file, child));
    });
  }

  return out;
}

module.exports = {
  join: function (out) {
    var files = search(path.join(__dirname, '../app/partials'), true);
    files.forEach(function (file) {
      out.push(file);
    });
    return out;
  }
}
