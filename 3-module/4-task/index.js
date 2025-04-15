function showSalary(users, age) {
  const filteredByAgeUsers = users.filter((user) => user.age <= age);
  let salariesStr = '';
  for (let user of filteredByAgeUsers) {
    salariesStr += `${user.name}, ${user.balance}\n`;
  }
  return salariesStr.slice(0, -1);
}
