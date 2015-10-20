/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/ethomp', function (req, res) {
  res.end('Hello from Elizabeth!');
});

app.listen(3000);
