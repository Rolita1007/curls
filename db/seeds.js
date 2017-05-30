var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/curls');

var User = require('../models/user');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

User.remove({}, function(err){
  console.log(err);
});

Item.remove({}, function(err){
  console.log(err);
});

//create new users
var claudia = new User({
  first_name: 'Claudia',
  last_name: 'Mercado',
  typeOfCurl: '2C',
  hairProduct: [
    {
      name: "DevaCurl",
      description: "Set it Free"
    },
  ]
});

var paola = new User({
  first_name: 'Paola',
  last_name: 'Martinez',
  typeOfCurl: '3A',
  hairProduct: [
    {
      name: "SheaMoisture",
      description: "Curl Enhancing"
    },
  ]
});

var elizabeth = new User({
  first_name: 'Elizabeth',
  last_name: 'Brown',
  typeOfCurl: '3B',
  hairProduct: [
    {
      name: "Cantu",
      description: "Curl Activator Cream"
    },
  ]
});

//save users
claudia.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('claudia created!');
});

paola.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('paola created!');
});

elizabeth.save(function(err){
  if (err) {
    console.log(err);
    return;
  }
    console.log('elizabeth created!');
});







