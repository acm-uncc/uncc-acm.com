var fs = require("fs");
var express = require("express");
var path = require("path");

var membersDir = path.join(__dirname, "../../members");

// export a router
module.exports = express.Router();

fs.readdir(membersDir, function (err, members) {
  if (!err) {
    members.forEach(function (member) {
      var memberPath = path.join(membersDir, member, "server/index");
      module.exports.use("/" + member + "/", require(memberPath));
    });
  }
});
