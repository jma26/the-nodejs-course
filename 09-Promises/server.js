// CommonJS Module
var http = require('http');
var fs = require('fs');
var rp = require('request-promise');
var Promise = require('promise');
var dotenv = require('dotenv');
var port = 5000;

http.createServer(callback).listen(port);
dotenv.config();

function callback(request, response) {
  var read = Promise.denodeify(fs.readFile);
  if (request.url === '/about') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    read(__dirname + '/views/about.html').then(function(data) {
      response.end(data);
    });
  } else if (request.url === '/jessema') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    read(__dirname + '/views/awesome.html').then(function(data) {
      response.end(data);
    });
  } else if (request.url === '/weather') {
    response.writeHead(200, {'Content-Type': 'application/json'})
    var options  = {
      uri: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk',
      qs: {
        appid: process.env.OPEN_WEATHER_API_KEY
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    }
    rp(options).then(function(data) {
      response.end(JSON.stringify(data));
    });
  } else {
    response.writeHead(400, {'Content-Type': 'text/html'});
    read(__dirname + '/views/404.html').then(function(data) {
      response.end(data);
    });
  }
}

console.log('Server running at http://localhost:' + port);
