var express = require("express");
var fs = require("fs");
var path = require("path");

var server = express();

var routes = {
  members: require("./routes/members")
}

server.use("/member/", routes.members);

server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});
