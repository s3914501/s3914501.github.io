const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// play pause logic
// fetch the right button to play and pause video
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// listen to click on this button
playPauseButton.addEventListener("click", togglePlay);

// fetch the image so that we can change the icon
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

//run this function when click happens
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}
//--------------------------------------------------
//myVideo.muted => myVideo.muted === true
// !myVideo.muted => myVideo.muted === false
// = assigning values name="rohit" id =4
