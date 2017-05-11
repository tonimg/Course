angular.module('mainApp')
  .factory('dataService', function ($http) {
    function getEmployees () {
      return $http.get('/data/employees.json')
                .then(function (response) {
                  return response.data
                })
    }

    function searchEmployeesByName (name) {
      return $http.get('/data/employees.json')
                .then(function (response) {
                  return response.data
                })
                .then(function (employees) {
                  return employees.filter(function (employee) {
                    name = name.toLowerCase()
                    var isInFirstName = employee.first_name.toLowerCase().includes(name)
                    var isInLastName = employee.last_name.toLowerCase().includes(name)
                    return isInFirstName || isInLastName
                  })
                })
    }

    function searchEmployeeById (idEmployee) {
      return $http.get('/data/employees.json')
                .then(function (response) {
                  return response.data
                })
                .then(function (employees) {
                  var foundEmployees = employees.filter(function (employee) {
                    return employee.id === +idEmployee
                  })
                  return foundEmployees[0]
                })
    }

    return {
      getEmployees: getEmployees,
      searchEmployeesByName: searchEmployeesByName,
      searchEmployeeById: searchEmployeeById
    }
  })
