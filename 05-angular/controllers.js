var mod = angular.module('meliApp');

mod.controller('BuscadorCtrl',function($scope,$state){
	$scope.validarYBuscar = function(){
		$scope.error = '';

		if($scope.query.length < 4){
			$scope.error = 'Es muy "corto"';
		}else{
			$state.go('resultado',{
				query:$scope.query
			});
		}
	}
});
mod.controller('ResultadoCtrl',function($scope,$stateParams,$http){
	$http.get('https://api.mercadolibre.com/sites/MLA/search?q=mesa')
	.then(function(respuesta){
		console.log(respuesta)
	})

	console.log($stateParams)
	$scope.test = 'soy el resultado';
})