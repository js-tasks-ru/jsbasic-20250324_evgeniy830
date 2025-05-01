import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #titleClass = 'modal__title';
  #bodyClass = 'modal__body';

  #elem = null;
  #isOpened = false;

  constructor() {
    this.#render();
  }

  open() {
    if (this.#isOpened) {
      return;
    }

    this.#isOpened = true;
    document.body.appendChild(this.#elem);
    document.body.classList.add('is-modal-open');

    document.addEventListener('keydown', this.#onEscapeClose);
  }

  close() {
    if (!this.#isOpened) {
      return;
    }

    document.body.removeChild(this.#elem);
    document.body.classList.remove('is-modal-open');
    this.#isOpened = false;

    document.removeEventListener('keydown', this.#onEscapeClose);
  }

  setTitle(titleText) {
    const title = this.#elem.querySelector(`.${this.#titleClass}`);
    title.textContent = titleText;

    if (this.#isOpened) {
      const onPageTitle = document.querySelector(`.${this.#titleClass}`);
      onPageTitle.textContent = titleText;
    }
  }

  setBody(modalBodyElement) {
    const body = this.#elem.querySelector(`.${this.#bodyClass}`);
    body.innerHTML = '';
    body.appendChild(modalBodyElement);

    if (this.#isOpened) {
      const onPageBody = document.querySelector(`.${this.#bodyClass}`);
      onPageBody.innerHTML = '';
      onPageBody.appendChild(modalBodyElement);
    }
  }

  #render() {
    this.#elem = createElement(this.#template());

    const closeButton = this.#elem.querySelector('.modal__close');
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  #onEscapeClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  #template() {
    return `
      <!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="${this.#titleClass}">
            </h3>
          </div>

          <div class="${this.#bodyClass}">
          </div>
        </div>
      </div>
    `;
  }

}
