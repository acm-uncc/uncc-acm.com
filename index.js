/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.get('/sergeneri', function (req, res) {
  res.end('Hello from Serge!');
});

app.listen(3000);
