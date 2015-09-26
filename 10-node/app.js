angular.module('myApp', ['ngStorage'])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push(function($q,$localStorage) {
            return {
                request: function(config) {
                	config.headers['Authorization'] = $localStorage.token;
                    return config;
                }
            };
        });
    })
    .controller('FormCtrl',['$scope','$http',function($scope,$http){

    }])
    .controller('FormCtrl', function($scope, $http, $localStorage) {
        $scope.generateToken = function() {
            $localStorage.token = (Math.random() * 123131231231231298798173).toString();
        }

        $scope.submit = function() {
            console.log($localStorage.token)
            $http.get('/user/me', function() {

            })
        }
    })