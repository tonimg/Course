angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/search/:item', {
        templateUrl: '/templates/results.html',
        controller: 'ResultsController'
      })
      .when('/details/:result', {
        templateUrl: '/templates/details.html',
        controller: 'DetailsController'
      })
  })
