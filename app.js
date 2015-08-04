$(document).ready(function() {
  $('.pixel').click(function() {
    var newColor = prompt('What color do you want to change this to? Choose any color so long as it\'s black.');
    $(this).css('background', newColor);
  });
});