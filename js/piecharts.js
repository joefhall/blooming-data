pieChartOptions = {
  colours: ['red', 'blue', 'green', 'yellow', 'gray', 'orange', 'purple'],
  options: {
    animation: {
      animateScale: true
    },
    legend: {
      display: false
    }
  },
};

data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: pieChartOptions.colours,
      borderWidth: 0
    }],

    labels: [
      'Abracadabra',
      'B',
      'C',
    ]
  };

//   gradient = ctx.createRadialGradient(75,50,5,90,60,100);
//   gradient.addColorStop(0,"red");
//   gradient.addColorStop(1,"white");

function createPieChart() {
  video.pieCreated = true;
  
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
  
  $('#chart-holder').fadeOut(500, function() {
    video.pieDying = false;
    video.pieCreated = false;
    pieChart.destroy();
  });
}

$(document).ready(function() {
  ctx = $('#chart')[0].getContext('2d');
});
