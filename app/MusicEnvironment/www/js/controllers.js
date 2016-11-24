angular.module('app.controllers', [])

.controller('tabs',
function($scope,$stateParams,HttpService){
	$scope.list = function() {
		HttpService.getCanciones().then(function(response) {
	    $scope.canciones = response;
	});	
	}
})
  
.controller('playlistCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, HttpService, Requests, $rootScope) {
	var lista = [];


	HttpService.getCanciones().then(function(response) {
    $scope.canciones = response;
	});

	$scope.sendId = function(index, id) {
	var flag = false;
		if (lista.length != 0){
			for (x = 0; x < lista.length; x++){
				if (index == lista[x]){
					flag = true;
					lista.splice(x,1)
					break;				
				}				
			}
			if(flag== false){
				lista.push(index)
			}
		}
		else{
			lista.push(index)
		}
		console.log(id);
		console.log(lista);
	},
	
	$scope.sendList = function () {
		$scope.setlist();
		var value = '{\"playlist\":\"[';
		var end = ']\"}';
		var toSend = value.concat(lista, end);
		console.log(toSend);
		Requests.request('POST', 'http://192.168.100.2:8888/player/play', toSend)
		$rootScope.play();
	},

	$scope.setlist = function () {
		HttpService.getCanciones().then(function(response) {
	    $scope.canciones = response;
		console.log('Cantidad de canciones->',$scope.canciones.length);
		
		});
	}
	

})
   
.controller('mP3PlayerCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, HttpService, $rootScope) {

	$rootScope.play = function () {
		HttpService.getPlay().then(function(response) {
		$scope.song = response;
		console.log('Reproduce ->',$scope.song);
		});
	},

	$scope.stop = function () {
		HttpService.getStop().then(function(response) {
	    $scope.song = response;
		console.log('Deteniendose ->',$scope.song);
		});
	},

	$scope.pause = function () {
		HttpService.getPause().then(function(response) {
		});
	},

	$scope.next = function () {
		HttpService.getNextSong().then(function(response) {
	    $scope.song = response;
		console.log('Reproduce ->',$scope.song);
		});
	},

	$scope.prev = function () {

		HttpService.getPrevSong().then(function(response) {
	    $scope.song = response;
		console.log('Reproduce ->',$scope.song);
		});
	},

	$scope.volm = function () {
		HttpService.getVolDown().then(function(response) {
	    $scope.vol = response;
		console.log('Volume Down ->',$scope.vol);
		});
	},

	$scope.volp = function () {
		HttpService.getVolUp().then(function(response) {
	    $scope.vol = response;
		console.log('Volume Up ->',$scope.vol);
		});
	},

	$scope.mute = function () {
		HttpService.getMute().then(function(response) {
		});
	},

	$scope.stop = function () {
		HttpService.getStop().then(function(response) {
	    $scope.song = response;
		console.log('Deteniendose ->',$scope.song);
		});
	},
	
	$scope.randomize = function () {
		HttpService.getRandom().then(function(response) {
	    $scope.song = response;
		console.log('Play random ->',$scope.song);
		});
	}
	$rootScope.play();

})
    
