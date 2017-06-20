angular.module('mainApp')
	.run(function($rootScope, $location, StorageService, AuthService){

			if ( AuthService.isLoggedIn() ) {
				const token = StorageService.getToken()
				AuthService.setCredentials(token)
			}

			$rootScope.$on( "$routeChangeStart", function(event, next, current) {

				if (next && next.secure) {
					console.log("this route is secured!!")
					if ( !AuthService.isLoggedIn() ) {
						$location.path("/login");
					}
				}

			});
	})
