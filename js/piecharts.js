pieChartOptions = {
  colours: ["#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059",
"#7A4900", "#0000A6", "#63FFAC", "#B79762", "#8FB0FF", "#997D87",
"#5A0007", "#809693", "#4FC601", "#3B5DFF", "#FF2F80",
"#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
"#7B4F4B", "#A1C299", "#0AA6D8", "#013349", "#00846F",
"#FFB500", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", 
"#00489C", "#6F0062", "#0CBD66", "#456D75", "#B77B68", "#7A87A1", "#788D66",
"#885578", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C",
"#B4A8BD", "#00A6AA", "#636375", "#A3C8C9", "#FF913F", "#938A81",
"#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1",
"#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
"#549E79", "#72418F", "#BC23FF", "#99ADC0", "#3A2465", "#922329",
"#5B4534", "#404E55", "#0089A3", "#CB7E98", "#A4E804", "#324E72", "#6A3A4C",],
  options: {
    animation: {
      animateScale: false
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
      custom: function(tooltipModel) {
        if (tooltipModel.hasOwnProperty('body')) {
          var tooltipText = tooltipModel.body[0].lines[0].split(': ');
          $('#chart-tooltip').text(tooltipText[0] + ': £' + parseInt(tooltipText[1]).toLocaleString());
          $('#chart-tooltip').show();
        } else {
          $('#chart-tooltip').text('');
          $('#chart-tooltip').hide();
        }
      }
    }
  }
};

data = {
    datasets: [{
      data: [],
      backgroundColor: pieChartOptions.colours,
      borderWidth: 0
    }],

    labels: []
  };

function extractFundingData() {
  data.datasets[0].data = [];
  data.labels = [];
  
  Object.keys(fundingCurrentData.data).forEach(function(key, index) {
    data.datasets[0].data.push(fundingCurrentData.data[key]);
    data.labels.push(key);
  });
}

function createPieChart() {
  video.pieCreated = true;
  
  extractFundingData();
  
  pieChartOptions.colours = shuffleArray(pieChartOptions.colours);
  var radius = 1000;
  
  $('#chart-holder').width((radius * 2));
  $('#chart-holder').height((radius * 2));
  $('#chart-holder').css('left', flowers[video.currentFlower].pie.centre.left - ($('#chart-holder').width() / 2));
  $('#chart-holder').css('top', flowers[video.currentFlower].pie.centre.top - ($('#chart-holder').height() / 2));
  $('#chart-holder').show();
  
  pieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: pieChartOptions.options
  });
}

function destroyPieChart() {
  video.pieDying = true;
  
  $('#chart-tooltip').hide();
  
  $('#chart-holder').fadeOut(500, function() {
    video.pieDying = false;
    video.pieCreated = false;
    if (typeof pieChart !== 'undefined') {
      pieChart.destroy();
    }
  });
}

$(document).ready(function() {
  ctx = $('#chart')[0].getContext('2d');
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  return array;
}

function getColourByLabel(label) {
  var index;
  
  for (var i = 0; i < data.labels.length; i++) {
    if (data.labels[i] === label) {
      index = i;
    }
  }
  
  return data.datasets[0].backgroundColor[index];
}
