var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var usersModel = require('./models/users');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, 'juancito');
});

passport.use(new FacebookStrategy({
    clientID: '159955497680570',
    clientSecret: '54281742bd3f55a2b8fa2961ae2fa898',
    callbackURL: "http://localhost:3041/auth/facebook/callback",
    scope:['email'],
    profileFields: ['email','picture'],
    session:false
  },
  function(accessToken, refreshToken, profile, done) {
  	var query = {
  		email:profile.emails[0].value
  	}
  	usersModel.findOne(query,function(err,user){
  		if(user){
  			done(null,user);
  		}else{
  			done({error:'not found'});
  		}
  	})
  	
  }
));