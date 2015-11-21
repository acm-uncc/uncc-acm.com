var express = require('express');

module.exports = function (app) {
  // create router
  var router = express.Router();

  // require main entry to api
  require('../api/index.js')(app, router);

  // return a 404 if api is not found
  router.get('*', function (req, res) {
    res.writeHead(404); res.end('API not found');
  });

  // include api router into main app router
  app.use('/api/', router);
}
