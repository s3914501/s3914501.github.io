let currentIndex = 0;
const videos = document.querySelectorAll(".video-slide");

function showSlide(index) {
  videos.forEach((video, i) => {
    video.classList.remove("active");
    video.pause();
    if (i === index) {
      video.classList.add("active");
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % videos.length;
  showSlide(currentIndex);
}
