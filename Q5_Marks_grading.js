/* A school has following grading system:- below 25:F, 25-45:E, 45-50:D, 50-60:C, 60-80:B, above 80:A. Ask user corresponding grade. */
let marks = prompt("Enter marks");
marks = Number.parseInt(marks);
if (marks < 25 && marks >= 0) {
  console.log("\n Grade = F.");
}
else if (marks >= 25 && marks < 45) {
  console.log("\n Grade = E.");
}
else if (marks >= 45 && marks < 50) {
  console.log("\n Grade = D.");
}
else if (marks >= 50 && marks < 60) {
  console.log("\n Grade = C.");
}
else if (marks >= 60 && marks < 80) {
  console.log("\n Grade = B.");
}
else if (marks >= 80 && marks <= 100) {
  console.log("\n Grade = A.");
}
else {
  console.log("\n Invalid marks are entered");
}