angular.module('mainApp')
	.config(function config ($httpProvider) {
	  $httpProvider.interceptors.push('AuthInterceptor')
})

