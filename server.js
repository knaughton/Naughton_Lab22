var express = require('express');
var app = express();
var routes = require('./route');

app.use(express.static(__dirname + '/public'));

app.use('/api', routes);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('App\'s server listening at http://localhost:%s', port);
})
