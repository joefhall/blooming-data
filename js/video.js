video = {
  currentTime: 0,
  currentFlower: 0,
  pieCreated: false,
  pieDying: false
};

function getFlowerByTime(time) {
  flower = -1;
  
  for (var i = 0; i < flowers.length; i++) {
    if (time >= flowers[i].start) {
      flower = i;
    }
  }
        
  return flower;
}

$(document).ready(function() {
  $('#video').on('timeupdate', function() {
    video.currentTime = this.currentTime;
    
    if (video.currentFlower > -1 &&
        video.currentTime > flowers[video.currentFlower].stop &&
        !video.pieDying) {
      destroyPieChart();
    }
    
    video.currentFlower = getFlowerByTime(video.currentTime);
    
    if (video.currentFlower > -1 &&
        video.currentTime > (flowers[video.currentFlower].start + 2) && 
        video.currentTime < (flowers[video.currentFlower].stop) && 
        !video.pieCreated &&
        !video.pieDying) {
      createPieChart();
    }
    
    console.log(video.currentFlower);
  });
});
