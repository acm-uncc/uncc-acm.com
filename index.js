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
<<<<<<< HEAD
=======

app.get('/Darshesh Patel', function (req, res){
  res.end('Hello from Darshesh!');
});
>>>>>>> 680aca6c1e520856219bede92c42c34dd716fcb7
app.listen(3000);
