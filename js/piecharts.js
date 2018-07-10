pieChartOptions = {
  colours: ['red', 'blue', 'green', 'yellow', 'gray', 'orange', 'purple'],
  options: {
    animation: {
      animateScale: true
    },
    legend: {
      position: 'left'
    }
  },
};

data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: pieChartOptions.colours,
    }],

    labels: [
        'A',
        'B',
        'C'
    ]
  };

//   gradient = ctx.createRadialGradient(75,50,5,90,60,100);
//   gradient.addColorStop(0,"red");
//   gradient.addColorStop(1,"white");

function createPieChart() {
  pieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: pieChartOptions.options
  });
}

function destroyPieChart() {
  pieChart.destroy();
}

$(document).ready(function() {
  ctx = $('#chart')[0].getContext('2d');
  createPieChart();
});
