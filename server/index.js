var express = require("express");
var fs = require("fs");
var path = require("path");

var server = express();

route("/", "./routes/statics");
route("/member/", "./routes/members");

server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});

// map route to module
function route (route, modulePath) {
  server.use(route, require(modulePath));
}
