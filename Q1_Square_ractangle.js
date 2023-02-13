/* Take the values of length and breath of a rectangle from the user and check wheather it is square or not  */
let length = prompt("Enter length : ");
length = Number.parseInt(length);
let breadth = prompt("Enter breadth : ");
breadth = Number.parseInt(breadth);
if (length == breadth) {
  console.log(" Square");
}
else {
  console.log(" Rectangle");
}