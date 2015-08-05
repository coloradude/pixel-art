$(document).ready(function() {
  $('.pixel').click(function() {
    $(this).addClass('selected-pixel');
    $(this).click(function(){
      $(this).removeClass('selected-pixel');
    });
  });
  $('#submit-button').click( function() {
    newColor = $('#color-picker').val();
    $('.selected-pixel').css('background-color', newColor);
    $('.selected-pixel').removeClass('selected-pixel');
  });
  $('.color-palette').click(function() {
    var newColor = $(this).css('background-color');
    $('.selected-pixel').css('background-color', newColor);
    $('.selected-pixel').removeClass('selected-pixel')
  });
});
