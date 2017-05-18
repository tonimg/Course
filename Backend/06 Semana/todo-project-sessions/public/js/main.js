console.log('this file is loaded...')
$('a.remove').on('click', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const $item = $(this).closest('tr')
  $.ajax({
    url,
    method: 'DELETE'
  })
  .done(function (msg) {
    alert(msg)
    $item.remove()
  })
  .fail(function (err) {
    console.log(err)
  })
})
