angular.module('mainApp')
	.controller('LoginController', function ($scope, $location, AuthService, DataService) {

	  $scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    AuthService.login(username, password)
					.then(msg => {
						console.log(msg)
						$location.path('/profile')
					})
					.catch(console.log)
	  }

	  $scope.getData = function () {
	    DataService.getSecretData()
					.then(data => $scope.message = data.msg)
		 }
})
