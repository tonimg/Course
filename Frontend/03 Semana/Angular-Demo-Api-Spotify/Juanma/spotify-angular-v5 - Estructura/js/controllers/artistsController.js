angular.module('spotifyApp')
 .controller('artistsController', function ($scope, $rootScope, spotifyService) {
   $scope.artistSelection = function () {
     var idArtist = $scope.idArtistSelected
     spotifyService.getAlbums(idArtist)
                    .then(function (response) {
                      $rootScope.albums = response.data.items
                    })
   }
 })
