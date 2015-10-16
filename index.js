/*
  require a node module
*/
var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.listen(3000);
