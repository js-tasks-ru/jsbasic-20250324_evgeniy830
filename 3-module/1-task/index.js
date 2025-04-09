function namify(users) {
  const namesArray = [];
  for (let user of users) {
    namesArray.push(user.name);
  }
  return namesArray;
}
