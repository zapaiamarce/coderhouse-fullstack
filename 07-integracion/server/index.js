var mod = require('./myModulo');
var om = require('./otroModulo');
var fileSystem = require('fs');
var ld = require('lodash');

var saludo = "hola";

var saludar = function(){
	return 'Hola mundo';
}

fileSystem.writeFile('message.txt', 'Hello Node', function (err) {
  if(!err){
  	console.log('It\'s saved!');
  }else{
  	console.log('hubo un error');
  }
});

console.log(mod);
console.log(om);
console.log(ld.now())