function setNiceSelectOptions() {
  $('.nice-select').on('click', function () {
    $('#video')[0].pause();
    if (video.autoplaying) {
      $('#autoplay-all-button').click();
    }
  });
}

$(document).ready(function() {
  setNiceSelectOptions();
  
  $('#update-button').button().on('click', function () {
    $(this).disable();
    createPieChart();
  });
  
  $('#autoplay-all-button').button({
    icons: {
        primary: 'ui-icon-pause'
    }
  }).on('click', function () {
    $('.ui-button-icon', this).toggleClass('ui-icon-pause ui-icon-play');
    $(this).toggleClass('highlighted');
    
    if (video.autoplaying) {
      video.autoplaying = false;
      $('#video')[0].pause();
    } else {
      video.autoplaying = true;
      $('#video')[0].play();
    }
  });
});

function updateSelects() {
  switch (fundingCurrentData.type) {
    case 'funder':
      $('#funders').val(fundingCurrentData.name);
      $('#themes').val(null);
      
      break;
    case 'theme':
      $('#funders').val(null);
      $('#themes').val(fundingCurrentData.name);
      break;
  }
  
  $('select').niceSelect('update');
  
  setNiceSelectOptions();
}
