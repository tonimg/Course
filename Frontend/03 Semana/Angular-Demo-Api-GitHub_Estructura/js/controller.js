angular.module('githubApp')
  .controller('githubController', function ($scope, githubService) {
    $scope.getReposUser = function () {
      var userName = $scope.username

      githubService.getInfoProfile(userName)
        .then(function (response) {
          console.log(response.data)
          $scope.profile = response.data
        })

      githubService.getRepos(userName)
        .then(function (response) {
          $scope.repos = response.data
        })
    }
  })
