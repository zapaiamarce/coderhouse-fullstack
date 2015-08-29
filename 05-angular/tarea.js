// Variables vacias
// function(){}
// ""
// []
// {}

// El simbolo pesos es un caracter más
// var $marce; 

// Siempre va array (aunque sea vacio)
// para declarar modulos
// si no lo incluimos angular "piensa"
// que estamos invocando a uno existente

angular.module('tareaApp',['ui.router']);
var modulo = angular.module('tareaApp');

modulo.config(function($stateProvider,$urlRouterProvider){
	// esto es un json
	// {
	// 	nomre:'juan',
	// 	app:'perez'
	// }

	$stateProvider.state('uno',{
		url:'/u',
		templateUrl:'templatesTarea/seccionUno.html',
		controller:'SeccionUnoCtrl'
	});

	$stateProvider.state('dos',{
		url:'/d',
		templateUrl:'templatesTarea/seccionDos.html',
		controller:'SeccionDosCtrl'
	});

	$urlRouterProvider.otherwise('/u');
})

angular.module('tareaApp')
.controller('SeccionUnoCtrl',function($scope,$state){
	$scope.saludo = 'HOla que tal?';
	$scope.cambiarEstado = function(nombreDeEstado){
		$state.go(nombreDeEstado);
	}
})

modulo.controller('SeccionDosCtrl',function($scope,$http){
	$scope.busqueda = 'Pepe';
	

	$scope.buscar = function(){
		var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+ $scope.busqueda +'&limit=10';
		$http.get(url).then(function(respuestaDelServidor){
			$scope.resultados = respuestaDelServidor.data.results;
		})	
	}

	$scope.saludo = 'Hoal soy la seccion dos hablando desde el controller';
})
