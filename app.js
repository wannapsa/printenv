// Set up Express Framework
var express = require('express');
var app = express();

// Home Page
app.get('/', function(req, res) {
  res.contentType('application/json');
  res.send(process.env);
});

var port = (process.env.APP_PORT || 3000);
app.listen(port);
console.log("Node Backend is listening at " + port);
