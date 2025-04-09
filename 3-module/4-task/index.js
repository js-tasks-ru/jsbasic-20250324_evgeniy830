function showSalary(users, age) {
  const filteredByAgeUsers = users.filter((user) => user.age <= age);
  let resultStr = '';
  for (let user of filteredByAgeUsers) {
    resultStr += `${user.name}, ${user.balance}\n`;
  }
  return resultStr.slice(0, -1);
}
