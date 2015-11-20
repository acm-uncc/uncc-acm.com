var config  = require('../../config/webpack.js');
var wds     = require('webpack-dev-server');
var webpack = require('webpack');

module.exports = function (app) {
  // specific development configuration
  app.set('dev-port', app.get('port') + 1000);

  // create webpack dev server
  var compiler = webpack(config);
  var server = new wds(compiler, {
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });
  server.listen(app.get('dev-port'));

  // redirect resources
  app.get('/dist/app.*', function (req, res) {
    res.redirect('http://localhost:' + app.get('dev-port') + req.url);
  });
}
