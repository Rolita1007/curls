var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  User.find({})
  .exec(function(err, user) {
    if(err) {
      console.log(err);
      return;
    }
    console.log(user);
    res.render('user/index', {
      user: user
    });
  });
});





//new user
router.get('/new', function(req, res) {
  res.render('user/new');
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
    res.render('user/show', {
      user: user
    });
  });
});



// router.post('/', function(req, res){
//   var user = new user({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     typeOfCurl: req.body.typeOfCurl,
//     product: req.body.product
//   });
//   user.save(function(err, user){
//     if(err) {
//       console.log(err);
//       return;
//     }
//     console.log(user);
//     res.send(user);
//     //res.render('user/show', {
//       user: user
//     })
//   });
// });



module.exports = router;
