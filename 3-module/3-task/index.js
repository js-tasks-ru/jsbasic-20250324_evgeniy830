function camelize(str) {
  const separatedArray = str.split('-');
  const camelCaseArray = separatedArray.map((word, index) =>
    index === 0 ? word : word[0]?.toUpperCase() + word?.slice(1)
  );
  return camelCaseArray.join('');
}
