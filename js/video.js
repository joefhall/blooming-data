video = {
  autoplaying: true,
  currentTime: 0,
  currentFlower: 0,
  dataSet: false,
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
    video.currentFlower = getFlowerByTime(video.currentTime);
    
    if (video.currentFlower > -1 &&
        video.currentTime > flowers[video.currentFlower].stop &&
        !video.pieDying) {
      if (video.autoplaying) {
        video.dataSet = false;
        destroyPieChart();
      } else {
        $('#video')[0].pause();
      }
    }
    
    if (video.currentFlower > -1 &&
        video.currentTime > flowers[video.currentFlower].start && 
        video.currentTime < flowers[video.currentFlower].stop && 
        video.autoplaying &&
        !video.dataSet) {
      video.dataSet = true;
      getRandomFundingData();
      updateSelects();
    }
    
    if (video.currentFlower > -1 &&
        video.currentTime > (flowers[video.currentFlower].start + 2) && 
        video.currentTime < flowers[video.currentFlower].stop && 
        !video.pieCreated &&
        !video.pieDying) {
      createPieChart();
    }
  });
  
  $('#video').on('ended', function() {
    this.currentTime = flowers[0].start;
    this.play();
  });
});
