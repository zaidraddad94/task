



///////////////////////// this code is not used /////////////////////////

// i use jwt cose the bot wase not accepting my token then i notest that i have to put Bearer befpr the token when i send it to the bot ////////////////  

////////////////////////////////////////////////////////////////////////














var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var items = require('../database-mongo');
var db = require('../database-mongo/index.js')
var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var dbouth = require('../db/users');

var jwt = require('../jwt');
///////////////////////////////////////////

var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
//////////////////////////////////////////

passport.use(new Strategy(
  function (token, cb) {
    dbouth.findByToken(token, function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  }));
///////////////////////////////////////////////////


// the get function 

app.get('/pirates', function (req, res) {
  items.selectAll(function (err, data) {


    //////////////this part to remove _id  from each object after getting the data from data base //////////////
    var newData = []
    for (var i = 0; i < data.length; i++) {
      newData.push({
        name: data[i].name,
        age: data[i].age,
        isCaptured: data[i].isCaptured
      })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (err) {
      res.sendStatus(500);
    } else {
      res.json(newData);
    }
  });
});







app.get('/pirates/countPirates', jwt.validateUser, function (req, res) {

  axios({
    method: 'get',
    url: 'https://eila-pirate-api.herokuapp.com/pirates/prison',
    responseType: 'application/json'
  })
    .then(function (response) {

      var arr = []
      for (var i = 0; i < response.data.faces.length; i++) {
        if (response.data.faces[i][0] == "8" || response.data.faces[i][0] == ";") {
          if (response.data.faces[i][response.data.faces[i].length - 1] == ")" || response.data.faces[i][response.data.faces[i].length - 1] == "|") {
            //  if (response.data.faces[i][1]== "-" || response.data.faces[i][1]== "~" || response.data.faces[i][1]== ")"|| response.data.faces[i][1]== "|" ){
            arr.push(response.data.faces[i])
            // }
          }
        }
      }

      res.json({ piratesFound: arr.length })
      console.log(arr.length, arr);
    })
    .catch(function (error) {
      console.log(error);
    });


});
// port works with heroku
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

