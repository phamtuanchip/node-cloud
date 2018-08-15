'use strict';

function RESTService($http, CONSTANTS) {
	var API_BASE = CONSTANTS.REST_BASE;

	return {
	 	 get: get,
	 	 post: post,
	 	 put: put 
    };

    function get(url){
      	return $http.get(API_BASE + url);
	};

	function post(url, data){
		console.log(url, data)
		if(url.indexOf('signup') >-1 || url.indexOf('Login') >-1){
			if(url.indexOf('Login') >-1) data.subdomains = [data.username.split("@")[1]];
            return $http.post('http://api.bos.edu.vn/' + url, data);
		}else
   	 		return $http.post(API_BASE + url, data);
	};

	function put(url, data) {
   		return $http.put(API_BASE + url, data);
	};
}

RESTService.$inject = ['$http', 'CONSTANTS'];
module.exports = RESTService;
