var express = require('express');
var dev     = require('./env/development');
var prod    = require('./env/production');
var path    = require('path');

var app = express();

app.set('port', 3000);

// load specific enivorment configuration
if (process.env.NODE_ENV == 'development') dev(app);
if (process.env.NODE_ENV == 'production') prod(app);

// require api
var api = require('./api');
api(app);

// serve public files
app.use('/', express.static(path.join(__dirname, '../public/')));
app.use('/assets/', express.static(path.join(__dirname, '../assets/')));
app.use('/partials/', express.static(path.join(__dirname, '../partials/')));

// return angular app for everything else
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// start the server on the specified port
app.listen(app.get('port'), function () {
  console.log('Server is listening at http://localhost:' + app.get('port'));
});
