var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  user.find({})
  .exe(function(err, user) {
    if(err) {
      console.log(err);
      return;
    }
    console.log(user);

    res.render('users/index', {
      user: user
    });
  });
});



module.exports = router;
