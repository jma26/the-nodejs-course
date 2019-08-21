var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('./config');
var port = config.port;
var axios = require('axios');

var app = express();

// Mongoose Schemas
var Person = require('./models/person.js');

// Mongo connection
mongoose.connect('mongodb://localhost/database-name');
var db = mongoose.connection;
db.on('error', function () {
  console.log('Unable to connect to database');
  throw new Error('Unable to connect to database');
});

// Support parsing of application/json type post data
app.use(bodyParser.json());
// Support parsing of application/x-www-form-urlencoded post data
// If extended: true - Allows any type, otherwise value can only be a string or array
app.use(bodyParser.urlencoded({
  extended: true
}));

http.createServer(app).listen(port);

app.get('/', function(request, response) {
  console.log(Person);
});

app.get('/people', function(request, response, next) {
  Person.find({}, function(error, data) {
    response.json(data);
  });
});

app.get('/people/:id', function(request, response, next) {
  var id = request.params.id;
  Person.findById(id, function(error, data) {
    response.json(data);
  });
});

console.log('Server running at http://localhost:' + port);