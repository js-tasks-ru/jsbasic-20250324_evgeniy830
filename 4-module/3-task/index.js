function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const cells = row.cells;
    const isAvailable = cells[3].dataset.available;
    const gender = cells[2].textContent;
    const age = Number(cells[1].textContent);

    if (isAvailable === 'true') {
      row.classList.add('available');
    } else if (isAvailable === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }

    if (gender === 'm') row.classList.add('male');
    if (gender === 'f') row.classList.add('female');

    if (age < 18) row.style.textDecoration = 'line-through';
  });
}
