function isMobile() { 
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

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}

if (isMobile()) {
  if (isIOS() && iOSversion()[0] < 10) {
    window.alert('Sorry, you need a slightly newer iPhone to see this, or use a computer.');
    $('#vis-holder'.hide());
  } else {
    $(document).ready(function() {
      $('#warning').text('Live beautiful. This visualisation looks better on a bigger screen.');
    });
  }
}

if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  $(document).ready(function() {
    $('#chart-holder').css('opacity', '0.5');
  });
  $(document).ready(function() {
    $('#warning').text('Live beautiful. This visualisation looks better on browsers other than Internet Explorer and Edge.');
  });
}

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  $(document).ready(function() {
    $('#chart-holder').css('mix-blend-mode', 'darken');
  });
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
