// import node modules
var express = require("express");
var path = require("path");

// configure express instance
var server = express();
server.set("port", 3000);
server.set("production", (process.env.NODE_ENV === "production"));
server.set("view-engine", "ejs");
server.set("views", path.join(__dirname, "views/"));

// include all members pages


server.listen(server.get("port"), function () {
  console.log("Server is running at http://localhost:" + server.get("port") + "/");
});
