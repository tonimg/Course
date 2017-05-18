$(document).ready(function () {
    // Hide clear btn on page load
  $('#clear').hide()
    // Add text input to list on button press
  $('#add').click(function () {
        // var toAdd gets the value of the input field
    var toAdd = $('input[name=item]').val()
        // Append list item in its own div with a class of item into the list div
        // It also changes the cursor on hover of the appended item
    $('.list').append('<div class="item">' + toAdd + '</div>')
        // fade in clear button when the add button is clicked
    $('#clear').fadeIn('fast')
        // Clear input field when add button is pressed
    $('input').val('')
  })
    // Checks off items as they are pressed
  $(document).on('click', '.item', function () {
        // Chamge list item to red
    $(this).css('color', 'black')
        // Change cursor for checked item
    $(this).css('cursor', 'default')
        // Strike through clicked item while giving it a class of done so it will be affected by the clear
    $(this).wrapInner('<strike class="done"></strike>')
        // Add the X glyphicon
    $(this).append(' ' + '<span class="glyphicon glyphicon-remove done" aria-hidden="true"></span>')
        // Stops checked off items from being clicked again
    $(this).prop('disabled', true)
  })
    // Removes list items with the class done
  $('#clear').click(function () {
    $('.done').remove('.done')
  })
})
