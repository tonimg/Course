$('#prevent').on('click', function (e) {
  e.preventDefault()
  var nameBeer = $('#nameBeer').val()
  var urlSearchBeer = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + nameBeer
    // get beers information

  // call AJAX and select beer
  $.ajax({
    url: urlSearchBeer,
    success: function (data) {
      var beerFound = data
      var optionsBeer = '<option disabled selected>Select you favorite beer</option>'
      beerFound.forEach(function (beerData) {
        optionsBeer += '<option value="' + beerData.id + '">' + beerData.name + '</option>'
      })
      $('#beers-selection').html(optionsBeer)
    }
  })
  // end call AJAX to select beer
  // Star description
})
  // start the ssecond call.
$('#beers-selection').on('change', function () {
  var idBeer = $(this).val()
  var descriptionBeer = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
  $.ajax({
    url: descriptionBeer,
    success: function (data) {
      console.log(data)
      var $nameBeer = '<h3> Name beer</h3>'
      var $yearBornBeer = '<h4>Creation Date:</h4>'
      var $descriptionBeer = '<p>Aditional information:</p>'
      var $labelBeer = '<option data-image-album="' + laber + '</option>'
    }
  })
})
