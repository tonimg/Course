angular.module('mainApp')
  .controller('SearchFormController', function ($scope, $rootScope, $location, dataService) {
    dataService.getEmployees()
      .then(function (employees) {
        $scope.employees = employees
      })

    $rootScope.section = 'home'
    $scope.search = function (e) {
      e.preventDefault()
      $location.path('/search/' + $scope.query)
    }
  })
