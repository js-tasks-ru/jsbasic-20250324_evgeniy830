function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const textElement = document.querySelector('#text');

  toggleButton.addEventListener('click', () => {
    textElement.hidden = !textElement.hidden;
  });
}
