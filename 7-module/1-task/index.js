import createElement from '../../assets/lib/create-element.js';

// TODO: скрывать кнопки на краях ленты
// TODO: поправить вёрстку

export default class RibbonMenu {
  elem = null;
  #categories = [];
  #activeCategoryId = '';

  #ribbonInner = null;
  #activeTabClass = 'ribbon__item_active';
  #activeArrowClass = 'ribbon__arrow_visible';

  constructor(categories) {
    if (!categories) {
      return;
    }
    this.#categories = categories;

    this.#render();
    this.#addEventListeners();
  }

  #render() {
    this.elem = createElement(this.#template());
    this.#ribbonInner = this.elem.querySelector('.ribbon__inner');

    // Добавляет класс стандартной категории (для которой id === '')
    this.#ribbonInner.querySelector("[data-id='']").classList.add(`${this.#activeTabClass}`);
  }

  #addEventListeners() {
    const tabs = this.elem.querySelectorAll('.ribbon__item');
    const previousButton = this.elem.querySelector('.ribbon__arrow_left');
    const nextButton = this.elem.querySelector('.ribbon__arrow_right');

    // Обработчики кликов по элементам
    tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        this.#onTabClick(event.target);
      });
    });

    // Обработчики кликов по кнопкам
    previousButton.addEventListener('click', () => {
      this.#ribbonInner.scrollBy(-350, 0);
    });

    nextButton.addEventListener('click', () => {
      this.#ribbonInner.scrollBy(350, 0);
    });

    // Обработчики видимости кнопок
    this.#ribbonInner.addEventListener('scroll', () => {
      let scrollWidth = this.#ribbonInner.scrollWidth;
      let scrollLeft = this.#ribbonInner.scrollLeft;
      let clientWidth = this.#ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (this.#ribbonInner.scrollLeft === 0) {
        previousButton.classList?.remove(this.#activeArrowClass);
      } else {
        previousButton.classList.add(this.#activeArrowClass);
      }

      if (scrollRight <= 1) {
        nextButton.classList?.remove(this.#activeArrowClass);
      } else {
        nextButton.classList.add(this.#activeArrowClass);
      }
    })
  }

  #onTabClick(tab) {
    let previousTab = this.#ribbonInner.querySelector(`[data-id='${this.#activeCategoryId}']`);
    previousTab?.classList.remove(`${this.#activeTabClass}`);

    tab.classList.add(`${this.#activeTabClass}`);
    this.#activeCategoryId = tab.dataset.id;

    const event = new CustomEvent('ribbon-select', {
      detail: tab.dataset.id,
      bubbles: true
    });
    this.elem.dispatchEvent(event);
  }

  #template() {
    return `
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          ${this.#categories.map(category => (this.#tabTemplate(category))).join('')}
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right ${this.#activeArrowClass}">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `;
  }

  #tabTemplate(category) {
    return `
        <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `;
  }
}
