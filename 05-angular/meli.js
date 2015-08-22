angular.module('meliApp',['ui.router'])


angular.module('meliApp')
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider.state('buscador', {
	  url: "/",
	  templateUrl: "templates/buscador.html",
	  controller:'BuscadorCtrl'
	})

	$stateProvider.state('resultado', {
	  url: "/resultado?query&filter",
	  templateUrl: "templates/resultado.html",
	  controller:'ResultadoCtrl'
	})

	$stateProvider.state('todo', {
	  url: "/todo",
	  views:{
	  	vistaUno:{
	  		templateUrl: "templates/buscador.html",
	  		controller:'BuscadorCtrl'
	  	},
	  	vistaDos:{
		  url: "/resultado",
		  templateUrl: "templates/resultado.html"
		}
	  }
	})

	$urlRouterProvider.otherwise('/');
})


