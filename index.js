/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile('/home/nick/uncc-acm.com/index.html');
});

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.get('/ryanspage', function (req, res) {
  res.sendFile('./ryansIndex.html');
});

app.listen(3000);
