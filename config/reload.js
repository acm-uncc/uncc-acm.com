var nodemon = require('nodemon');
var path = require('path');

nodemon({
  script: path.join(__dirname, './server.js'),
  watch: path.join(__dirname, '../api')
});
