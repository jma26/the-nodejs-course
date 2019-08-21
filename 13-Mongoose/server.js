var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('./config');
var port = config.port;
var axios = require('axios');

var app = express();

// Mongoose Schemas
var person = require('./models/person.js');

// Support parsing of application/json type post data
app.use(bodyParser.json());
// Support parsing of application/x-www-form-urlencoded post data
// If extended: true - Allows any type, otherwise value can only be a string or array
app.use(bodyParser.urlencoded({
  extended: true
}));

http.createServer(app).listen(port);

app.get('/', function(request, response) {
  console.log(person);
});

console.log('Server running at http://localhost:' + port);