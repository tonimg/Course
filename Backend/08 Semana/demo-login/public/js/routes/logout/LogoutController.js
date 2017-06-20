angular.module('mainApp')
	.controller('LogoutController', function ($scope, $location, AuthService) {

		AuthService.logout()
		console.log("logouting....");
		$location.path('/')

})
