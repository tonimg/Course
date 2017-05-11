angular.module('mainApp')
  .controller('ResultsController', function ($scope, $rootScope, $routeParams, dataService) {
    $rootScope.section = 'results'
    // /search/beatles -> itemSearch = "beatles"
    var itemSearch = $routeParams.item
    $scope.itemSearch = itemSearch

    dataService.searchEmployeesByName($scope.itemSearch)
      .then(function (filteredEmployees) {
        $scope.filteredEmployees = filteredEmployees
      })
  })
