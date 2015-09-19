var express = require('express');
var app = express();
var port = process.env.PORT || 3041;
var mongoUrl = 'mongodb://admin:admin@ds041581.mongolab.com:41581/airbnb';
var m = require('mongoose');
var bodyParser = require('body-parser')
var usersModel = require('./models/users')
var apartmentsModel = require('./models/apartments')
var jwt = require('jwt-simple');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('asdasdasdasd');


var passport = require('passport');
require('./facebookStrategy');

var secret = 'asdasdasdsadasdasda';

// middlewares
app.use(bodyParser.json())
app.use(passport.initialize())

m.connect(mongoUrl,function(err){
	if(err){
		console.log('ta todo mal',err)
	}else{
		console.log('ta todo bien')
	}
});


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook'),function(req,res){

	var tokenPayload = {
		id:req.user._id
	}

	res.json({
		token:jwt.encode(tokenPayload, secret)
	});

	var message = {
	    "html": "Hola usuario:"+req.user,
	    "subject": "Bienvenido",
	    "from_email": "message.from_email@example.com",
	    "from_name": "Example Name",
	    "to": [{
	            "email": req.user.email
	        }]
	};

	mandrill_client.messages.send({"message": message}, function(result){
	    console.log('email result',result);  
	},function(e) {
	    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message)
	});
});


// url : acceso a los recursos
// http://api.mercadolibre.com/v1/users/qzapaia@gmail.com/apartments/
// http://localhost:3041/v1/apartments/12312321312

app.get('/',function(req,res){
	res.json({
		saludo:'hola'
	})
});

app.get('/auth/facebook/callback',function(req,res){
	res.json({
		saludo:'hola'
	})
})


app.get('/users/token',function(req,res){

	var query = {
		email:req.query.email,
		password:req.query.password
	}

	usersModel.findOne(query,function(err,user){
		if(user){
			var tokenPayload = {
				id:user._id
			}
		
			res.json({
				token:jwt.encode(tokenPayload, secret)
			});

		}else{
			res.status(401).json({error:'email o password erroneos'})
		}
	})
});

app.post('/users',function(req,res){

	var newUser = new usersModel(req.body);
	newUser.save(function(err){
		if(!err){
			res.json(newUser);
		}else{
			res.status(400).json({error:'algo paso'})
		}
	});
});

var authUser = function(req,res,next){
	try{
		req.decodedUser =  jwt.decode(req.headers.authorization, secret);
		next();
	}catch(e){
		req.decodedUser = null;
		next();
	}
}

app.post('/apartments',authUser,function(req,res){
	
	if(req.decodedUser.id){
		var newApartment = new apartmentsModel(req.body);
		newApartment.owner = req.decodedUser.id;

		newApartment.save(function(err){
			if(!err){
				res.json(newApartment);
			}else{
				res.status(400).json({error:'algo paso'})
			}
		});
	}
});




app.listen(port,function(){
	console.log('running on',port);
})