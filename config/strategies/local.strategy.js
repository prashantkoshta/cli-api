var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
    passport.use(new LocalStrategy({
        usernameField:'loginName',
        passwordField:'loginPassword'
    },
    function(username,password,done){
           console.log(">>>>>",username,password);
            var user = {
                username:username,
                password:password
            };
            if(username === 'prashant' && password ==='prashant')
                return done(null,user);
            else
                return done(null,false);
        }
    ));
}