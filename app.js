var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static(__dirname + '/build'));

app.listen(3000);
console.log('Server started on port 3000');
