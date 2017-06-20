angular.module('mainApp')
	.controller('ProfileController', function ($scope, $location, AuthService, DataService) {

		DataService.getSecretData()
			.then( data => $scope.msg = data.msg )

})
