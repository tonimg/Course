angular.module('mainApp')
	.factory('DataService', function ($http) {
  	function getSecretData () {
  		return $http.get('/data')
  			.then(response => response.data)
  			.catch(() => 'error!!')
  	}
  return { getSecretData }
})
