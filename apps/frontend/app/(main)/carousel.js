document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
    });
  }

  function startAutoplay() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  showImage(currentIndex);
  startAutoplay();
});
