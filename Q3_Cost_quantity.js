/* A shop will give discount of 10% if the cost of purchased quatity is more then Rs. 1000. Ask user for the quatity. Suppose  one unit will cost Rs.100. Judge and print total cost for user .  */
let total, cost = 100, discount;
let quantity = prompt("Enter qunatity purchased");
quantity = Number.parseInt(quantity);
total = quantity * cost;
if (total >= 1000) {
  console.log("\n Total price without discount deducted = %d", total);
  discount = total * 0.1;
  console.log("\n Discount = %d", discount);
  console.log("\n Grand Total price = %d", total - discount);
}
else {
  console.log("No Discount ");
}