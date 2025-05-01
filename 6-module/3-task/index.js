import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;

  #sliderInner = null;
  #nextSlideButton = null;
  #previousSlideButton = null;

  #slides = [];
  #totalSlides = null;
  #currentSlide = 0;
  #slideWidth = null;

  constructor(slides) {
    if (!slides) {
      return;
    }

    this.#slides = slides;
    this.#totalSlides = this.#slides.length - 1;
    
    this.#render();
  }

  #render() {
    this.elem = createElement(this.#template());

    this.#sliderInner = this.elem.querySelector('.carousel__inner');
    this.#nextSlideButton = this.elem.querySelector('.carousel__arrow_right');
    this.#previousSlideButton = this.elem.querySelector('.carousel__arrow_left');

    this.#slideWidth = this.#sliderInner.offsetWidth;

    this.#addEventListeners();
    this.#updateNavigateButtons();
  }

  #addEventListeners() {
    const buttons = this.elem.querySelectorAll('.carousel__button');
    buttons.forEach(button => {
      const id = button.closest('.carousel__slide').dataset.id;
      button.addEventListener('click', () => this.#onAddButtonClick(id));
    });

    window.addEventListener('resize', () => {
      this.#updateSliderParams();
    });

    this.#nextSlideButton.addEventListener('click', () => {
      if (this.#currentSlide < this.#totalSlides) {
        this.#currentSlide += 1;
        this.#updateNavigateButtons();
        this.#updateSliderParams();
      }
    });

    this.#previousSlideButton.addEventListener('click', () => {
      if (this.#currentSlide > 0) {
        this.#currentSlide -= 1;
        this.#updateNavigateButtons();
        this.#updateSliderParams();
      }
    });
  }

  #template() {
    return `
      <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </div>

          <div class="carousel__inner">
              ${this.#slides.map((slide) => this.#singleSlideTemplate(slide)).join('')}
          </div>
        </div>
    `;
  }

  #singleSlideTemplate(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  #updateSliderParams = () => {
    this.#slideWidth = this.#sliderInner.offsetWidth;
    this.#sliderInner.style.transform = `translateX(-${this.#currentSlide * this.#slideWidth}px)`;
  };

  #updateNavigateButtons = () => {
    this.#nextSlideButton.style.display = this.#currentSlide === this.#totalSlides ? 'none' : '';
    this.#previousSlideButton.style.display = this.#currentSlide === 0 ? 'none' : '';
  };

  #onAddButtonClick = (id) => {
    const event = new CustomEvent('product-add', {
      detail: id,
      bubbles: true,
    });
    console.log(1);

    this.elem.dispatchEvent(event);
  }
}
