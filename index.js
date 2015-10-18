/*
  require a node module
*/
var express = require('express');

var app = express();

app.get('/', express.static('./'));

app.get('/nickbreaton', function (req, res) {
  res.end('Hello from Nick!');
});
app.get('/MatthewBrien', function(req, res){
  res.end("Hello from Matthew Brien, the Scurge of the Seven Seas");
})

app.listen(3000);
