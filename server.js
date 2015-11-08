var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html' , { root : __dirname});
});

app.get('/user.jpg', function (req, res) {
  res.sendFile('user.jpg' , { root : __dirname});
});

app.post('/logIn', function (req, res) {
  res.sendFile('log-in.html' , { root : __dirname});
});

app.post('/signUp', function (req, res) {
  res.sendFile('sign-up.html' , { root : __dirname});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

