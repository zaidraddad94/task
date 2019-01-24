const mongoose = require('mongoose');
mongoose.connect('mongodb://zaid:zaid-1994@ds211635.mlab.com:11635/testt');

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
  age : Number,
  isCaptured : Boolean 
});

var items = mongoose.model('items', itemSchema);

// this function will be calde in the get fungtion to get all the data from the data base 
var selectAll = function(callback) {
  items.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;

