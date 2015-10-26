var express = require("express");
var fs = require("fs");
var path = require("path");

var server = express();

var config = require("./config");

// set all server configurations
config(server);

// map routes to modules
route("/", "./routes/statics");
route("/member/", "./routes/members");

// temp home
server.get("/", function (req, res) {
  res.render("home");
});

// not found
server.get("*", function (req, res) {
  res.render("notfound");
});

server.listen(3000, function () {
  console.log("Server is running at http://localhost:3000/");
});

// map route to module
function route (route, modulePath) {
  server.use(route, require(modulePath));
}
