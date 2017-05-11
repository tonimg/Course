$('#f1-calculate').on('click', function () {
  var a = $('#f1-a').val()
  var b = $('#f2-b').val()
  var result = a / 100 * b

  result = parseInt(result)
  $('#f1-result').val(result)

  if (isNaN(result) == true) {
    $('#helpBlock1').html(error)
  }
})

// second part

$('#f2-calculate').on('click', function () {
  var a = $('#f2-a').val()
  var b = $('#f2-b').val()
  var result = a / b * 100

  result = parseInt(result)
  $('#f2-result').val(result)

  if (isNaN(result) == true) {
    $('#helpBlock1').html(error)
  }
})

// third part

$('#f3-calculate').on('click', function () {
  var a = $('#f3-a').val()
  var b = $('#f3-b').val()
  var result = a / b * 100

  result = parseInt(result)
  $('#f3-result').val(result)

  if (isNaN(result) == true) {
    $('#helpBlock1').html(error)
  }
})

var error = ('<p id="helpBlock1" class="help-block">Something went wrong!!!</p>')

// if (isNaN(num1) == true || isNaN(num2) == true) {
//   console.log('This is not a number')
// }
