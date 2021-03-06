var express = require('express');
var jade = require('jade');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('./config');
var port = config.port;
var axios = require('axios');

var app = express();

app.set('view engine', 'jade');

// Support parsing of application/json type post data
app.use(bodyParser.json());
// Support parsing of application/x-www-form-urlencoded post data
// If extended: true - Allows any type, otherwise value can only be a string or array
app.use(bodyParser.urlencoded({
  extended: true
}));

http.createServer(app).listen(port);

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

app.get('/articles', function(request, response) {
  var url = 'http://simple-api.herokuapp.com/api/v1/articles';
  axios.get(url)
    .then(function(data) {
      response.send(data.data);
    })
    .catch(function(error) {
      response.send(error);
    })
});

app.post('/articles', function(request, response) {
  var url = 'http://simple-api.herokuapp.com/api/v1/articles';
  var title = request.body.title;
  var intro = request.body.intro;
  var content = request.body.content;
  var author = request.body.author;
  axios.post(url, {
    title: title,
    intro: intro,
    content: content,
    author_id: author
  })
  .then(function(data) {
    console.log(data.data.status);
    response.send('<h1>Your new posting was ' + data.data.status + ' </h1>');
  })
  .catch(function(error) {
    response.send(error);
  })
});

app.post('/calculate', function(request, response) {
  var number_1 = request.body.number1;
  var number_2 = request.body.number2;
  console.log(number_1, number_2);
  response.status(200).send('<h1>Your total calculation is: ' + number_1 + number_2 + ' </h1>');
});

console.log('Server running at http://localhost:' + port);