angular.module('githubApp')
  .factory('githubService', function ($http) {
    function _getRepos (username) {
      var url = 'https://api.github.com/users/' + username + '/repos'
      return $http.get(url)
    }

    function _getInfoProfile (username) {
      var url = 'https://api.github.com/users/' + username
      return $http.get(url)
    }

    return {
      getRepos: _getRepos,
      getInfoProfile: _getInfoProfile
    }
  })
