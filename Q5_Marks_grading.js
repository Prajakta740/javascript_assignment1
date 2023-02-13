/* A company decided to give bonus of 10% to employee if his/her year of service is more than 5 years. Ask user for their salary and year of service and print the net bonus. */
let bonus, salary, totalsalary;
let years= prompt("Enter years of service");
years = Number.parseInt(years);
if (years >= 5) {
  salary = prompt("Enter your salary");
  salary = Number.parseInt(salary);
  if (salary <= 100000 && salary >= 1000) {
    bonus = salary * 0.1;
    console.log("\n Bonus = %d", bonus);
    totalsalary = salary + bonus;
    console.log("\n Total salary = %d", totalsalary);
  }
  else {
    console.log("Invalid Input.");
  }
}
else {
  salary = prompt("Enter your salary");
  salary = Number.parseInt(salary);
  if (salary <= 100000 && salary >= 1000) {
    bonus = salary * 0.05;
    console.log("\n Bonus = %d", bonus);
    totalsalary = salary + bonus;
    console.log("\n Total salary = %d", totalsalary);
  }
  else {
    console.log("Invalid Input.");
  }
}