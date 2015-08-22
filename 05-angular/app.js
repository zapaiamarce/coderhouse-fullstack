var mod = angular.module('myApp',[])

var suma = function(){

}

// angular.module('myApp')
angular.module('myApp')

.controller('BuscadorCtrl',function($scope){
	console.log($scope);
	$scope.test = 'Hola que tal?';
	suma()
	$scope.clickBoton = function(){
		console.log('hola '+$scope.nombre);
	}

	$scope.$watch('nombre',function(newValue,oldValue){
		console.log('valor viejo',oldValue);
		console.log('valor nuevo',newValue);
	})

})
.controller('LoginCtrl',function($scope){
	$scope.validar = function(){
		if(!$scope.email){
			$scope.error = 'Necesito el email';
		}else if($scope.email.length <= 3){
			$scope.error = 'El email es muy corto';
		}else{
			$scope.error = '';
		}
		
		$scope.$watch('email',function(newValue){
			console.log(newValue);
		})
		// if(!$scope.password){
		// 	$scope.error = 'Necesito el password';
		// }
		// console.log($scope.email)
		// console.log($scope.password)
	}
})

// angular.module('myApp')