angular.module('frontEndApp')
  .factory('searchController', function ($http) {
    	function searchGas (query) {
      var urlSearchGas = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/' + query
      console.log()
      return $http.get(urlSearchGas)
      console.log(urlSearchGas)
    }
  })
