// delete function
$('.list-group .remove').on('click', function (e) {
  e.preventDefault()
  const $thisElement = $(this)
  const url = $thisElement.attr('href')
  console.log(url)
  const method = 'DELETE'
  $.ajax({ url, method })
    .done(response => {
      console.log(response)
      $thisElement.parent('.list-group-item').remove()
    })
})

// Edit function
$('.list-group .modify').on('click', function (e) {
  e.preventDefault()
  const $thisElement = $(this)
  $thisElement.parents('.list-group').find('form input').removeClass('hidden').focus()
  $thisElement.parents('.list-group').find('p').addClass('hidden')
})

$('.edit-form').on('submit', function (e) {
  e.preventDefault()

  const $thisElement = $(this)
  const url = $thisElement.attr('action')
  const name = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { name }
  })
        .done(response => {
          $thisElement
            .closest('input')
            .text(name)
            // .removeClass('hidden')
            .end()
            .find('input')
            // .addClass('hidden')
        })
})
// Done function
$('.done').on('click', function (event) {
  event.preventDefault()
  const url = this.href
  const method = 'PUT'
  const data = 'done=true'
  $.ajax({ url, method, data })
    .done(() => {
      $(this).closest('li').remove()
    })
})
