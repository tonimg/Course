 angular.module('spotifyApp')
 .controller('albumsController', function ($scope, $rootScope, spotifyService) {
   $scope.albumSelection = function () {
     var idAlbum = $scope.idAlbumSelected
     spotifyService.getSongs(idAlbum)
                .then(function (response) {
                  $rootScope.songs = response.data.items
                })
   }
 })
