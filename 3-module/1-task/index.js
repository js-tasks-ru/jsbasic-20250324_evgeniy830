function namify(users) {
  const resultArray = [];
  for (let user of users) {
    resultArray.push(user.name);
  }
  return resultArray;
}
