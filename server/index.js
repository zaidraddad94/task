var express = require('express');
var bodyParser = require('body-parser');

 var items = require('../database-mongo');
var db = require('../database-mongo/index.js')
var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// the get function 

app.get('/pirates', function (req, res) {
  items.selectAll(function(err, data) {

    
//////////////this part to remove _id  from each object after getting the data from data base //////////////
var newData = []
for(var i = 0 ; i<data.length ; i++){
newData.push({ name : data[i].name,
  age : data[i].age,
  isCaptured:data[i].isCaptured
 })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(err) {
      res.sendStatus(500);
    } else {
      res.json(newData);
    }
  });
});
 
 // port works with heroku
 var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

