angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/about', {
        templateUrl: '/templates/about.html',
        controller: 'aboutController'
      })
      .when('/contact', {
        templateUrl: '/templates/contact.html',
        controller: 'contactController'
      })
  })
