$(document).ready(function() {
  var ctx = document.getElementById('chart').getContext('2d');
  
//   var gradient = ctx.createRadialGradient(75,50,5,90,60,100);
//   gradient.addColorStop(0,"red");
//   gradient.addColorStop(1,"white");
  
  var data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['red', 'blue', 'green'],
    }],

    labels: [
        'A',
        'B',
        'C'
    ]
  };
  
  var options = {
    animation: {
      animateScale: true
    },
  };
  
  var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
  });
});
