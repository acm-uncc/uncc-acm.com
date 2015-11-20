var express = require('express');
var dev     = require('./env/development');
var prod    = require('./env/production');
var path    = require('path');

var app = express();

app.set('port', 3000);

if (process.env.NODE_ENV == 'development') dev(app);
if (process.env.NODE_ENV == 'production') prod(app);

// require api
var api = require('./api');
api(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Server is listening at http://localhost:' + app.get('port'));
});
