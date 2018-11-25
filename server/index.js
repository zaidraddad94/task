var express = require('express');
var bodyParser = require('body-parser');

 var items = require('../database-mongo');
var db = require('../database-mongo/index.js')
var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// the post function 
app.post('/items' , function (req,res){
  db.save(req.body , function(test){
    res.send(req.body)
  })
})

// the get function 

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
  	console.log( "dddddd" ,data )
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
 
 // port works with heroku
 var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

