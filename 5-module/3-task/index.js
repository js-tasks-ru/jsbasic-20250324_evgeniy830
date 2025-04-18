function initCarousel() {
  const sliderInner = document.querySelector('.carousel__inner');
  const nextSlideButton = document.querySelector('.carousel__arrow_right');
  const previousSlideButton = document.querySelector('.carousel__arrow_left');

  const updateSliderTranslate = () => {
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  };

  const updateNavigateButtons = () => {
    nextSlideButton.style.display = currentSlide === totalSlides ? 'none' : '';
    previousSlideButton.style.display = currentSlide === 0 ? 'none' : '';
  };

  const totalSlides = sliderInner.children.length - 1;
  let currentSlide = 0;
  let slideWidth = sliderInner.offsetWidth;

  updateNavigateButtons();

  window.addEventListener('resize', () => {
    slideWidth = sliderInner.offsetWidth;
    updateSliderTranslate();
  });

  nextSlideButton.addEventListener('click', () => {
    if (currentSlide < totalSlides) {
      currentSlide += 1;
      updateNavigateButtons();
      updateSliderTranslate();
    }
  });

  previousSlideButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updateNavigateButtons();
      updateSliderTranslate();
    }
  });
}
