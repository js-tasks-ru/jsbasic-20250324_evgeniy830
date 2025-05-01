import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
  #rows = [];
  elem = null;

  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.#render();
  }

  #render() {
    this.elem = createElement(this.#tableTemplate());
    this.#addEventListeners();
  }

  #tableTemplate() {
    return `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.#rows.map(row => this.#rowTemplate(row)).join('')}
        </tbody>
      </table>
    `;
  }

  #rowTemplate(row) {
    return `
        <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button class="remove-button-js">X</button></td>
        </tr>
    `;
  }

  #addEventListeners() {
    const buttons = this.elem.querySelectorAll('.remove-button-js');
    buttons.forEach(button => {
      button.addEventListener('click', () => button.closest('tr').remove());
    });
  }

}
