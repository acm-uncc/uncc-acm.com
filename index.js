/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.get('/ryanspage', function (req, res) {
  res.sendFile('ryanspage/index.html' , { root : __dirname});
});

app.get('/DarsheshPatel', function (req, res){
  res.end('Hello from Darshesh!');
});

app.listen(3000);
