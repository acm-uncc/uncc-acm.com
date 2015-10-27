var handlebars = require("express-handlebars");
var path = require("path");

module.exports = function (server) {
  // views location
  server.set("views", path.join(__dirname, "../views/"));

  // create handlebars engine
  server.engine(".html", handlebars({
    extname: ".html",
    defaultLayout: path.join(server.get("views"), "index.html")
  }));

  // set handlebars engine
  server.set("view engine", ".html");

  // set port
  server.set("port", process.env.PORT || 3000);

  // have server listen on specified port
  server.listen(server.get("port"), function () {
    console.log("Server is running at http://localhost:" + server.get("port") + "/");
  });
}
