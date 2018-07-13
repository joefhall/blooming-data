function detectMobile() { 
  if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

if (detectMobile() === true) {
  window.alert('Live beautiful. This visualisation works better on a bigger screen.');
}

if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  $(document).ready(function() {
    $('#chart-holder').css('opacity', '0.5');
  });
  window.alert('Live beautiful. This visualisation looks better on any browser except Internet Explorer and Edge.');
}

function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    viewport.content = "initial-scale=" + ($(window).width() / 1280);
    viewport.content = "width=1280";
  }
}

$(document).ready(function() {
  zoomOutMobile();
});