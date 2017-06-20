angular.module('mainApp')
	.config(function ($routeProvider) {

	  $routeProvider
			.when('/login', {
			  templateUrl: '/js/routes/login/template.html',
			  controller: 'LoginController'
		})

	})
