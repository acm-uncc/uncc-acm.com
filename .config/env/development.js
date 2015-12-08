var cp = require('child_process');
var path = require('path');
var proxy = require('express-http-proxy');

module.exports = function (app) {
  // specific development configuration
  app.set('dev-port', app.get('port') + 1000);

  // run webpack server in child process
  var wds = path.resolve(__dirname, '../../node_modules/.bin/webpack-dev-server');
  var config = path.resolve(__dirname, '../webpack.js');
  var child = cp.exec(wds + ' --config ' + config + ' --port ' + app.get('dev-port'));

  // redirect resources
  app.get('/dist/app.*', proxy('http://localhost:4000', {
    forwardPath: function(req, res) {
      return require('url').parse(req.url).path;
    }
  }));
}
