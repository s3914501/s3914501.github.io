let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.getElementById("slider");
  const slides = slider.children.length;
  currentSlide = (currentSlide + direction + slides) % slides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}
