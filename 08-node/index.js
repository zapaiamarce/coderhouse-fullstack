var m = require('mongoose');
var mongoUrl = 'mongodb://admin:admin@ds041581.mongolab.com:41581/airbnb';

// me conecto a la base
m.connect(mongoUrl,function(err){
	if(err){
		console.log('ta todo mal',err)
	}else{
		console.log('ta todo bien')
	}
});

// 

var schema = new m.Schema({ 
	name: 'string', 
	size: 'string',
	edad: Number,
	token:'string'
});
var User = m.model('User', schema);

var u = new User({
	name:'marce',
	edad:50
})

u.save();

// u.save(function(err){
// 	if(err){
// 		console.log('algo salio mal con el user')
// 	}else{
// 		console.log(u);
// 		u.name = 'pepe';
// 		u.save();
// 	}
// });

// User.find({},function(err,docs){
// 	var primero = docs[0];
// 		primero.name = 'jose';

// 	primero.save(function(err){
// 		console.log('usuario',primero);
// 	})
// })

var query = {
	edad:{
		$lt:1000
	}
}

User.find(query,function(err,docs){
	console.log(docs)
})

var update = {name:'neo'};
var options = {multi: true}
User.update(query,update,options,function(err,docs){
	console.log(docs)
})

User.findOne(query,function(err,res){
	if(err){
		res.status(400).json({error:'algo paso con tal cosa'});
	}else{
		res.toJSON();
		console.log('findOne',res)
	}
})

User.findById(query,function(err,res){
	console.log('findOne',res)
})


