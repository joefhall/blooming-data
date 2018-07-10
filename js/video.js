video = {
  currentTime: 0,
  currentFlower: 0
};

function getFlowerByTime(time) {
  flower = -1;
  
  for (var i = 0; i < flowers.length; i++) {
    if (time >= flowers[i].start && time < flowers[i].stop) {
      flower = i;
    }
  }
        
  return flower;
}

$(document).ready(function() {
  $('#video').on('timeupdate', function() {
    video.currentTime = this.currentTime;
    video.currentFlower = getFlowerByTime(video.currentTime);
    console.log(video.currentFlower);
  });
});
