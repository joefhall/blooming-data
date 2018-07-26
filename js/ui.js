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
  
  $('#themes').on('change', function () {
    $('#funders').val(null);
    $('select').niceSelect('update');
    setNiceSelectOptions();
    
    video.dataSet = true;
    setData();
    
    if ($('#themes').val() || $('#funders').val()) {
      $('#update-button').addClass('highlighted');
      $('#update-button').button('enable');
    } else {
      $('#update-button').removeClass('highlighted');
      $('#update-button').button('disable');
    }
  });
  
  $('#funders').on('change', function () {
    $('#themes').val(null);
    $('select').niceSelect('update');
    setNiceSelectOptions();
    
    video.dataSet = true;
    setData();
    
    if ($('#themes').val() || $('#funders').val()) {
      $('#update-button').addClass('highlighted');
      $('#update-button').button('enable');
    } else {
      $('#update-button').removeClass('highlighted');
      $('#update-button').button('disable');
    }
  });
  
  $('#update-button').button().on('click', function () {
    $(this).toggleClass('highlighted');
    $(this).button('disable');
    
    destroyPieChart();
    var nextFlower = video.currentFlower < (flowers.length -1) ? video.currentFlower + 1 : 0;
    $('#video')[0].currentTime = flowers[nextFlower].start;
    $('#video')[0].play();
  });
  $('#update-button').button('disable');
  
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
  
  $('#audio-button').button({
    icons: {
        primary: 'ui-icon-pause'
    }
  }).on('click', function () {
    $('.ui-button-icon', this).toggleClass('ui-icon-pause ui-icon-play');
    $(this).toggleClass('highlighted');
    
    if ($('#background-music')[0].paused) {
      $('#background-music')[0].play();
    } else {
      $('#background-music')[0].pause();
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
      $('#themes').val(fundingCurrentData.name);
      $('#funders').val(null);
      break;
  } 
  
  $('select').niceSelect('update');
  setNiceSelectOptions();
}

function setData() {
  fundingCurrentData.type = $('#themes').val() !== '' ? 'theme' : 'funder';
  
  switch (fundingCurrentData.type) {
    case 'funder':
      fundingCurrentData.name = $('#funders').find(":selected").val();
      fundingCurrentData.data = getFundingByFunder(fundingCurrentData.name);
      break;
    case 'theme':
      fundingCurrentData.name = $('#themes').find(":selected").val();
      fundingCurrentData.data = getFundingByTheme(fundingCurrentData.name);
      break;
  }
}
