angular.module('mainApp')
	.factory('StorageService', function ($window) {
  	const key = 'auth-token'

	  function getToken () {
	    return $window.localStorage.getItem(key)
	  }

	  function setToken (token) {
	    $window.localStorage.setItem(key, token)
	  }

		function removeToken() {
      return $window.localStorage.removeItem(key)
    }

  return { setToken, getToken, removeToken }
})
