

var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo');
var db = require('../database-mongo/index.js')
var app = express();


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


// var itemSchema = mongoose.Schema({
//   name : Number,
//   ms : String 
// });

// app.post('/ms', function (req, res) {
	
   
// helper.getReposByUsername(req.body.data , function (data) {
	

// res.send(data)
//   })
// });

console.log("zaiiid")

// var ms = new itemSchema.itemSchema


app.post('/items' , function (req,res){
  console.log( "zzz" , req.body)
console.log("inter post ")

db.save(req.body , function(test){
  
	console.log(test)
  res.send(req.body)
})

})





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
 
 var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

