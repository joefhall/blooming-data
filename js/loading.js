$(document).ready(function() {
  $('#loading-message').hide();
  $('#start').show();

  $('#start-button').button().on('click', function() {
    $('#loading').hide();
    $('#video')[0].play();
    if (!isMobile() || (isMobile() && !isIOS())) {
      $('#background-music')[0].play();
    } else {
      $('#audio-controls').hide();
    }
  });
});