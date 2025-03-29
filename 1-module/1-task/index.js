function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

// альтернативная реализация рекурсией
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
