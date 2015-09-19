var express = require('express');
var app = express();
var port = process.env.PORT || 3041;
var mongoUrl = 'mongodb://admin:admin@ds041581.mongolab.com:41581/airbnb';
var m = require('mongoose');
var bodyParser = require('body-parser')
var usersModel = require('./models/users')
var apartmentsModel = require('./models/apartments')
var jwt = require('jwt-simple');
var secret = 'asdasdasdsadasdasda';

// middlewares
app.use(bodyParser.json())

m.connect(mongoUrl,function(err){
	if(err){
		console.log('ta todo mal',err)
	}else{
		console.log('ta todo bien')
	}
});


// url : acceso a los recursos
// http://api.mercadolibre.com/v1/users/qzapaia@gmail.com/apartments/
// http://localhost:3041/v1/apartments/12312321312

app.get('/',function(req,res){
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

app.post('/apartments',function(req,res){
	try{
		var decodedUser =  jwt.decode(req.headers.authorization, secret);
	}catch(e){
		res.status(400).json({error:'invalid token'})
	}
	
	if(decodedUser.id){
		var newApartment = new apartmentsModel(req.body);
		newApartment.owner = decodedUser.id;

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