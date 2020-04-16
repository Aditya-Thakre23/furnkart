var express = require('express');
var path = require('path');

//router object
var router = express.Router();

router.get('/shop', function(req, res){
  res.render("shop");
});

module.exports = router;
