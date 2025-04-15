function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const diagonalCell = table.rows[i].children[i];
    diagonalCell.style.backgroundColor = 'red';
  }
}
