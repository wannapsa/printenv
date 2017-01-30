// Set up Express Framework
var express = require('express');
var app = express();

// Home Page
app.get('/', function(req, res) {
    res.send('Hit Root URL');
});

var port = (process.env.APP_PORT || 3000);
app.listen(port);
console.log("Node Backend is listening at " + port);
