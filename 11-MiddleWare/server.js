var express = require('express');
var http = require('http');
var jade = require('jade');
var port = 4567;

var app = express();

http.createServer(app).listen(port);

// Serving static content
app.use('/public', express.static(__dirname + '/public'))

// Custom Middleware to use with next()
app.use(function(request, response, next) {
  console.log('Current url you are on:', request.url);
  next();
});

app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  // fs.readFile() is not necessary. Jade API has compileFile() that compiles directly from a file
  var data = {
    name: 'Jesse Ma'
  };

  var template = jade.compileFile(__dirname + '/public/index.jade');

  var html = template(data);

  // Output jade template to response object
  response.write(html);
  response.end();
});

app.get('/yo', function(request, response) {
  response.writeHead(200);
  response.write('Hello from route /yo in 11-Middleware with express');
  response.end();
})

console.log('Server running on port', port);
