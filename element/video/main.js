var myVideo = document.getElementById('my-video');

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}

function makeBig() {
  myVideo.width = 640;
}

function makeSmall() {
  myVideo.width = 320;
}
