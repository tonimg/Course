
console.log('It works!!')

$('button').on('click', function () {
  const query = $('#query').val()
  window.location.href = `/employees?search=${query}`
})
