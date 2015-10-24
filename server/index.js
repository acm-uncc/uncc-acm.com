// import node modules
var express = require("express");
var fs = require("fs");
var path = require("path");

// configure express instance
var server = express();
server.set("port", 3000);
server.set("production", (process.env.NODE_ENV === "production"));
server.set("view-engine", "ejs");
server.set("views", path.join(__dirname, "views/"));

// include all members pages
fs.readdir(path.join(__dirname, "..", "members"), function (err, files) {
  files.forEach(function (file) {
    var memberModulePath = path.join(__dirname, "..", "members", file, "server.js");
    var memberMiddleware = require(memberModulePath);
    server.use("/member/" + file, memberMiddleware);
  });
});

server.listen(server.get("port"), function () {
  console.log("Server is running at http://localhost:" + server.get("port") + "/");
});
