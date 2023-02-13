/* A student will not be allowed to sit in exam if his/her attendence is less than 75%. Take following input from user: Number of classes held, number of classes attended and print percentage of class attended and allowed o  */
let per;
let classes = prompt("Enter the number of lectures held:");
classes = Number.parseInt(classes);
let attent = prompt("Enter the number of lectures you have attended:");
attent = Number.parseInt(attent);
per = attent / classes * 100;
if (per >= 75 && per <= 100) {
  console.log("\n Percentage of classes attended = %d%", per);
  console.log("\n You can sit in examination hall for Exams.");
}
else if (per >= 0 && per <= 74) {
  console.log("\n Percentage of classes attended = %d%", per);
  console.log("\n You cannot sit in examination hall for Exams.");
}
else {
  console.log("\n Invalid Input.");
}