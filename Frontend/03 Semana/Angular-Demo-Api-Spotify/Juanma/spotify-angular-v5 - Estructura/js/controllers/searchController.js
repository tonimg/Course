 angular.module('spotifyApp')
    .controller('searchController', function ($scope, $rootScope, spotifyService) {
      $scope.artistQuery = 'the beatles'

      $scope.searchArtist = function () {
        var query = $scope.artistQuery
        spotifyService.searchArtist(query)
                .then(function (response) {
                  $rootScope.artists = response.data.artists.items
                })
      }
    })
