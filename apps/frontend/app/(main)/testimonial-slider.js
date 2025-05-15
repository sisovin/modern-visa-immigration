document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.testimonial-slider');
  const slides = slider.querySelectorAll('.slide');
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('opacity-100', i === index);
      slide.classList.toggle('opacity-0', i !== index);
    });
  }

  function startSlider() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);

  showSlide(currentIndex);
  startSlider();
});
