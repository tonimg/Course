$('a').on('click', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const $item = $(this).parent()
  $.ajax({
    url,
    method: 'DELETE'
  })
  .success(function () {
    console.log('item was removed!')
    $item.remove()
  })
  .error(function (err) {
    console.log(err)
  })
})
