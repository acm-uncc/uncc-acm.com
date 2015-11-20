var cp = require('child_process');
var path = require('path');

module.exports = function (app) {
  // specific development configuration
  app.set('dev-port', app.get('port') + 1000);

  // run webpack server in child process
  var wds = path.resolve(__dirname, '../../node_modules/.bin/webpack-dev-server');
  var config = path.resolve(__dirname, '../webpack.js');
  var child = cp.spawn(wds, [ '--config', config, '--port', app.get('dev-port') ]);

  // redirect resources
  app.get('/dist/app.*', function (req, res) {
    res.redirect('http://localhost:' + app.get('dev-port') + req.url);
  });
}
