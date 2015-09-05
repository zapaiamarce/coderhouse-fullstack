// Crear un modulo
// Asociarlo al tag HTML con ng-app
// Definir un router con $stateProvider dentro del metodo config del modulo
// Definir dos estados (home y resultado)
// Usar templates

var mod = angular.module('myApp',['ui.router']);

mod.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('home',{
		url:'/',
		templateUrl:'templates/home.html',
		controller:'HomeCtrl'
	})
	$stateProvider.state('r',{
		url:'/resultados?q',
		templateUrl:'templates/resultados.html',
		controller:'ResultadosCtrl'
	})
	$urlRouterProvider.otherwise('/');
})


mod.controller('HomeCtrl',function($scope,$state){
	$scope.irAlResultado = function(){
		var query = $scope.parametroDeBusqueda;

		$state.go('r',{ q:query })

		console.log($scope.parametroDeBusqueda)
	}
})
mod.controller('MainCtrl',function($rootScope,$scope){
	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams){ 
	    $scope.stateName = toState.name;
	    console.log($scope.stateName)
	})
})
mod.controller('ResultadosCtrl',function($stateParams,$scope,$http){
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+ $stateParams.q;

	$http.get(url)
	.then(function(respuestaDelServer){
		$scope.resultados = respuestaDelServer.data.results;
	})
	.catch(function(){
		console.log('todo mal');

	})
	.finally(function(){
		console.log('finalmente');
	})
	console.log(url)
})
