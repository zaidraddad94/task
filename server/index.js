

var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));



app.post('/repos', function (req, res) {
	
   
helper.getReposByUsername(req.body.data , function (data) {
	

res.send(data)
  })
});


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
 
 var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

