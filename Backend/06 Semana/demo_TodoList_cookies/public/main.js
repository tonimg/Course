$('.glyphicon').click(function () {
  if ($(this).hasClass('glyphicon-question-sign')) {
    $(this).removeClass('glyphicon-question-sign').removeClass('blue2')
    $(this).addClass('glyphicon-ok-sign').addClass('green2')
  } else {
    $(this).removeClass('glyphicon-ok-sign').removeClass('green2')
    $(this).addClass('glyphicon-question-sign').addClass('blue2')
  }
})
