/*
  require a node module
*/
var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});

app.get('/MatthewBrien', function(req, res){
  res.end("Hello MatthewBrien, Scurge of the Seven Seas");
})

app.get('/ryanspage', function (req, res) {
  res.sendFile('ryanspage/index.html' , { root : __dirname});
});

app.get('/DarsheshPatel', function (req, res){
  res.end('Hello from Darshesh!');
});

app.get('/sergeneri', function (req, res) {
  res.end('Hello from Serge!');
});

app.get('/MichaelP', function(req, res){
	res.end('Hello from Michael!');
});

app.listen(app.get('port'), function () {
  console.log('Go to http://localhost:3000 to see the website.');
});
