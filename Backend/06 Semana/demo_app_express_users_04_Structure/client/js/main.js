$('.list-users .remove').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( response => {
      console.log(response)
      $thisElement.parents('.list-group-item').remove()
    })

})

$('.list-users .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
  console.log("$thisElement", $thisElement);
    .parents('.list-group-item')
      .find("form input")
        .removeClass("hidden")
        .end()
      .find("p")
        .addClass("hidden")
})

$(".edit-form").on("submit", function(e) {
  e.preventDefault();

  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const editedValue = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { editedValue }
  })
  .done( response => {
    $thisElement
      .siblings("p")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
    console.log(response)
  })


})
