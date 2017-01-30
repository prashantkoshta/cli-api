var passport = require("passport");
//var express = require('express');
//var app = express();

module.exports = function (app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done){
        done(null,user);
    });

    passport.deserializeUser(function(user, done){
        done(null,user);
    });
    
    require('./strategies/local.strategy')();
}