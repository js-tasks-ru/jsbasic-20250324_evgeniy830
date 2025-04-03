function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Альтернативная реализация
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
