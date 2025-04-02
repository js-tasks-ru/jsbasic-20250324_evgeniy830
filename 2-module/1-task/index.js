function sumSalary(salaries) {
  let sum = 0;
  for (let salaryKey in salaries) {
    if (isFinite(salaries[salaryKey])) {
      sum += salaries[salaryKey];
    }
  }
  return sum;
}
