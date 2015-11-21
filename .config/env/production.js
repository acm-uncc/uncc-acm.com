var express = require('express');
var path = require('path');

module.exports = function (app) {
  // serve dist folder
  app.use('/dist/', express.static(path.join(__dirname, '../../dist/')));
}
