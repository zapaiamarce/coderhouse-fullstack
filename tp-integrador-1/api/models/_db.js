var mongoose = require('mongoose');
var sandBox = 'url conexion en dev'
var uri = process.env.CONNECTION || sandBox;

mongoose.connect(uri,function (err) {
	if(err){ 
		console.error('mongoose connection error'); 
	}else{
		console.log('alta conexión')
	}
});
