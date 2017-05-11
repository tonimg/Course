angular.module('mainApp')
  .controller('beersController', function ($scope, $http) {
    $scope.title = 'BEERS'
    let url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=%BEERS%'
    $scope.searchBeer = () => {
    	url = url.replace('%BEERS%', $scope.nameBeer)
    	$http.get(url)
	    	.then(function (response) {
	    		$scope.beers = response.data
	    	  console.log($scope.beers)
	    	})

	    $scope.selectedBeer = function () {
	    	var urlImgBeer = 'http://www.aceitedearganweb.com/wp-content/uploads/2015/10/cerveza.jpg'
	    	let beer = $scope.beers[$scope.myBeer]
	    	console.log(beer)

	    	$scope.showBeer = {
	    		image: beer.images.medium ? beer.images.medium : beer.labels.medium,
	    		name: beer.name,
	    		description: beer.description
	    	}
	    }
	    	// if (showBeer.image !== -1) { urlImgBeer } else {}
	    	// como hacer una condición sino existe algun elemento del objeto.
    }
  })
