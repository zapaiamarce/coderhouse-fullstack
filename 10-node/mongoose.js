var m = require('mongoose');
var mongoUrl = 'mongodb://admin:admin@ds041581.mongolab.com:41581/airbnb';

m.connect(mongoUrl,function(err){
	if(err){
		console.log('ta todo mal',err)
	}else{
		console.log('ta todo bien')
	}
});


var userSchema = new m.Schema({ 
	email: 'string', 
	password: 'string'
});

userSchema.methods.actualizarInformacionPersona = 
function (cb) {
  console.log(this);
  cb();
}

userSchema.statics.findByGeo = function (query, cb) {
  return this.find(query, cb);
}


var User = m.model('User', userSchema);

User.find(function(err,user){
	user[2].actualizarInformacionPersona(function(){
		console.log('ok');
	})
});

User.findByGeo({name:'marce'},function(err,users){
	console.log(users)
})