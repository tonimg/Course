angular.module('mainApp')
  .controller('DetailsController', function ($scope, $rootScope, $routeParams, dataService) {
    $rootScope.section = 'details'
    var id = $routeParams.result
    // $scope.id = id

    dataService.searchEmployeeById(id)
      .then(function (dataEmployee) {
        $scope.dataEmployee = dataEmployee
      })
  })
