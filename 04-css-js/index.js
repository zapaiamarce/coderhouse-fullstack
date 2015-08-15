var primerNombre;
var segundoNombre = 'pepe'; // string
var edad = 14; // number

var listado = [2, 3, 5, 'hola', {
    apellido: 'zapaia'
}]; // array

var flag = true;
var flag = 'pepe';

var suma = function(numeroUno, numeroDos) {
    var resultado = numeroUno + numeroDos;
    return resultado;
}

var resultado = suma(5, 6);

// VALOR Y REFERENCIA

var modificar = function(variable) {
    variable.nombre = 'test';
}
/*
var otraCosa = 'pepepe';
modificar(otraCosa)
*/
var otroObj = {
    nombre: 'carlos'
}
console.log(otroObj);
modificar(otroObj);
console.log(otroObj)


var nombre = 'juan';
var duplicado = nombre;

var objDuplicado = juan;

var juan = { 
	nombre:'juan',
	edad:15,
	getFullName:function(){

	}
};


var persona = {
    nombre: 'Marcelo',
    apellido: 'zapaia',
    edad: 14,
    getFullName: function() {
    	return this.nombre + ' ' + this.apellido;
    }
}

var Persona = function(nombre,apellido){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 15;
}

Persona.prototype.barrio = 'once';
Persona.prototype.pushToServer = function(){
	server.save('user',this);
};


var r = new Persona('Ramon','Perez');
var c = new Persona('Carlos','Lopez');


r.pushToServer()
c.pushToServer()

c.mostrarEnPantall();

