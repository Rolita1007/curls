var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  User.find({})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('user/index', {
      user: user
    });
  });
});

//new user
router.get('/new', function(req, res) {
  res.render('user/new');
});

//create user
router.post('/', function(req, res) {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    typeOfCurl: req.body.typeOfCurl,
    products: req.body.products
  });

  user.save(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(user);
    //res.send(user);
    res.render('user/show', {
      user: user
    });
  });
});

//show user
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(user);
      //res.send(user);
      res.render('user/show', {
        user: user
      });
    });
});

// edit user
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('users/edit', {
      user:user
    });
  });
});

//udate user
// router.patch('/:id', function(req, res) {
//   User.findByIdAndUpdate(req.params.id, {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     typeOfCurl: req.body.typeOfCurl,
//     products: req.body.products
//   }, {new: true} )
//   .exec(function(err, user) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(users);
//     res.send(user);

//   });
// });

// delete user
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('user deleted.');
      //res.send('user deleted.');
      res.redirect('/user');
    });
});

module.exports = router;
