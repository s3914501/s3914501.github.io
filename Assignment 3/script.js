let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.getElementById("slider");
  const slides = slider.children.length;
  currentSlide = (currentSlide + direction + slides) % slides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
