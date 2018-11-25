const mongoose = require('mongoose');
mongoose.connect('mongodb://zaid:zaid-1994@ds024778.mlab.com:24778/data');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
//make schema
var itemSchema =  mongoose.Schema({
  name : String,
  ms : String 
});

var Item = mongoose.model('Item', itemSchema);
//save function  , i call it in post req to save the schema in the data base 
//save takes 2 arguments  x is the data coming frome front end saved in schema obj 
var save = function (x ,cb){


  var item = new Item({
    name : x.name,
    ms : x.ms 
  })
 

  item.save(function (err){
    if (err){
      console.log("errrrrrrrrro" , err)
      //return handleError(err)
    }else {
      console.log("saaaavvvveeeed !!!")
      cb("data base")
    }
  })
}

// this function will be calde in the get fungtion to get all the data from the data base 
var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;

module.exports.save = save;