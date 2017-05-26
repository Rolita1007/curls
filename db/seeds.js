var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/curls')

var User = require('../models/user');
var Item = require('../models/item');

mongoose.Promise = global.Promise;

Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

//create new users
var claudia = new User({
  first_name: 'Claudia',
  last_name: 'Mercado',
  typeOfCurl: '2C',
  items: [{name: "Not to hard to maintain"}]
});

var paola = new User({
  first_name: 'Paola',
  last_name: 'Martinez',
  typeOfCurl: '3A',
  items: [{name: "Let's get this frizz taken care of!"}]
});

var monica = new User({
  first_name: 'Monica',
  last_name: 'Brown',
  typeOfCurl: '3B',
  items: [{name: "So many products to choose from"}]
});

//save users
claudia.save(function(err){
  if (err)
    console.log(err);

  console.log('User created!');
});

paola.save(function(err){
  if (err)
    console.log(err);

  console.log('User created!');
});

monica.save(function(err){
  if (err)
    console.log(err);

  console.log('User created!');
});









