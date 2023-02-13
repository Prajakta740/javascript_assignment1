/* Take  two id values from the user and print greatest among them  */
let a = prompt("Enter first number: ");
a = Number.parseInt(a);
let b = prompt("Enter second number: ");
b = Number.parseInt(b);
if (a > b) {
  console.log("%d is greater than %d", a,b);
}
else {
  console.log("%d is greater than %d", b,a);
}