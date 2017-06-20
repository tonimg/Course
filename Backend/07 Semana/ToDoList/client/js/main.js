// delete function
$('.remove').on('click', function (e) {
  e.preventDefault()

  const $thisElement = $(this)
  const url = $thisElement.attr('href')
  const method = 'DELETE'

  $.ajax({ url, method })
    .done(response => {
      $thisElement
      .closest('li')
      .remove()
      // .load('/tasks')
    })
    .fail(() => alert('Try removing again'))
})

// Edit function
$('.modify').on('click', function (e) {
  e.preventDefault()

  const $thisElement = $(this)
  $thisElement
    .parents('.list-group-item')
    .find('form input')
    .removeClass('hidden')
    .end()
    .find('p')
    .addClass('hidden')
})

$('.edit-form .modify').on('submit', function (e) {
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
              .siblings('p')
              .text(title)
              .removeClass('hidden')
              .end()
              .find('input')
              .addClass('hidden')
        })
        .fail(() => alert('Try removing again'))
})
// Done function

$('.done').on('click', function (e) {
  e.preventDefault()

  const $thisElement = $(this)
  const url = $thisElement.attr('href')
  const method = 'PUT'
  const data = 'done=true'

  $.ajax({
    url,
    method,
    data
  })
    .done(response => {
      $thisElement
        .parents('list-group-item')
        .remove()
    })
    .fail(() => {
      alert('Try again')
    })
})

// $('.done').on('click', function (e) {
//   e.preventDefault()

//   const $thisElement = $(this)
//   const url = $thisElement.attr('href')
//   const method = 'PUT'
//   const data = 'done=true'

//   $.ajax({ url, method, data })
//     .done(() => {
//       $(this)
//         .closest('li')
//         .remove()
//     })
// })
