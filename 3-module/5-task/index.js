function getMinMax(str) {
  const numbersArray =
    str.split(' ')
      .map((item) => Number(item))
      .filter(item => Number.isFinite(item));

  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray)
  };
}
