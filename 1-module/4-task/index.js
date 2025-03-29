function checkSpam(str) {
  // Более гибкое решение с возможностью расширения списка строк
  const forbiddenWords = [
    '1xbet',
    'xxx'
  ];
  let lowerCaseStr = str.toLowerCase();
  for (let word of forbiddenWords) {
    if (lowerCaseStr.includes(word)) {
      return true;
    }
  }
  return false;

  // Более простое решение для 2 строк
  // let lowerCaseStr = str.toLowerCase();
  // return lowerCaseStr.includes('1xbet') || str.includes('xxx');
}
