const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  myVideo.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  myVideo.pause();
}

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
}

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);
fullscreenButton.addEventListener("click", () => {
  if (myVideo.requestFullscreen) {
    myVideo.requestFullscreen();
  } else if (myVideo.webkitRequestFullscreen) {
    myVideo.webkitRequestFullscreen();
  } else if (myVideo.msRequestFullscreen) {
    myVideo.msRequestFullscreen();
  }
});

const repeatButton = document.querySelector("#repeat-button");
repeatButton.addEventListener("click", repeatVideo);

function repeatVideo() {
  myVideo.currentTime = 0;
  myVideo.play();
}

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icon8.com/ios-glyphs/30/pause--v2.png";
  }
}
