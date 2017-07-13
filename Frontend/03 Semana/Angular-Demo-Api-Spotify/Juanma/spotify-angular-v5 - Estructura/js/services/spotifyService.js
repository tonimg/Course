angular.module('spotifyApp')
  .factory('spotifyService', function ($http) {
    function searchArtist (query) {
      var urlSearchArtists = 'https://api.spotify.com/v1/search?type=artist&query=' + query
      return $http.get(urlSearchArtists)
    }

    function getAlbums (idArtist) {
      var urlAlbumsArtist = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
      return $http.get(urlAlbumsArtist)
    }

    function getSongs (idAlbum) {
      var urlSongs = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
      return $http.get(urlSongs)
    }

    return {
      searchArtist: searchArtist,
      getAlbums: getAlbums,
      getSongs: getSongs
    }
  })
