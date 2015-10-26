var path = require("path");

module.exports = function (req, res, next) {
  res.render(path.join(__dirname, "../views/index"));
}
