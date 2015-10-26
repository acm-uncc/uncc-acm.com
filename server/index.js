var express = require("express");
var fs = require("fs");
var path = require("path");

var server = express();

// include member routes
fs.readdir(path.join(__dirname, "../members"), function (err, members) {
  if (!err) {
    members.forEach(function (member) {
      var memberPath = path.join(__dirname, "../members/", member, "server/index");
      server.use("/member/" + member + "/", require(memberPath));
    });
  }
});

server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});
