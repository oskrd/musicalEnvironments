var server = 'http://192.168.100.2:8888';

angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('HttpService', function($http) {
 return {
   getCanciones: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
		var part = '/player/getlist';
		var url = server.concat(part);
     	return $http.get(url)
       	.then(function (response) {
        // In the response, resp.data contains the result. Check the console to see all of the data returned.
        console.log('Get canciones:', response);
        return response.data;
       	});
   },
   getPlay: function() {
		var part = '/player/play';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get a play a song', response);
        return response.data;
	    })
   },
   getRandom: function() {
		var part = '/player/random';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get randomize playing', response);
        return response.data;
	    })
   },

	getPause: function() {
		var part = '/player/pause';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get pause a song', response);
        return response.data;
	    })
   },

	getStop: function() {
		var part = '/player/stop';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get Stopping a song', response);
        return response.data;
	    })
   },

	getMute: function() {
		var part = '/player/mute';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get muting', response);
        return response.data;
	    })
   },

	getNextSong: function() {
		var part = '/player/next';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get next song', response);
        return response.data;
	    })
   },

	getPrevSong: function() {
		var part = '/player/prev';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get previous song', response);
        return response.data;
	    })
   },

	getVolUp: function() {
		var part = '/player/volup';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get volume up', response);
        return response.data;
	    })
   },

	getVolDown: function() {
		var part = '/player/voldown';
		var url = server.concat(part);
		return $http.get(url).then(function(response){
        console.log('Get muting', response);
        return response.data;
	    })
   }


 };
})

.factory('Requests', function($http){

    return {
        request: function(method, url, data){
            $http({
                method: method,
                url: url,
                data: data
            });
        }
    }
});

;
