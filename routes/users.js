var express = require('express');
var passport = require("passport");
var router = express.Router();

/* GET users listing. */


router.post('/signin', function(req, res, next) {
    
  passport.authenticate('local', function(err, user, info) {
      console.log(err,user,info);
      if (err) { return next(err); }
      if (!user) { return res.sendStatus(401); }
      req.login(user, function(err) {
        if (err) { return next(err); }
        console.log(req.user);
        return res.sendStatus(200);
      });
  })(req, res, next);
     
});

/*
router.post('/signin', function(req, res, next) {
  console.log(req.body);
  //req.body.usernam
  var userdata = req.body;
  if(userdata!=null && userdata.loginName =="prashant" && userdata.loginPassword=="prashant"){
      //req.session.regenerate(function(){                                                                                                                                                                                                   
          req.session.user = userdata.loginName; 
          console.log("Session",req.session);                                                                                                                                                                      
          res.sendStatus(200);
      //});       
  }else{
      res.sendStatus(401);
  }
});*/


router.get('/logout', function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource ....12');
});

router.get('/isAuth', function(req, res, next) {
  console.log(req.user,req.isAuthenticated());
    if(req.isAuthenticated()){
      res.sendStatus(200);
    }else{
      res.sendStatus(401);
    }
});


module.exports = router;
