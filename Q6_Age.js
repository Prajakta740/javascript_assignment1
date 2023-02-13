/* Take the age as input of 3 people by user and determine oldest and youngest among them.  */
let age1 = prompt("Enter the age of first person");
age1 = Number.parseInt(age1);
let age2 = prompt("Enter the age of second person");
age2 = Number.parseInt(age2);
let age3 = prompt("Enter the age of third person");
age3 = Number.parseInt(age3);
// For highest age
if (age1 > age2)
{
  if (age1 > age3)
  {
    console.log("\n Age of first person is highest.");
  }
  else
  {
    console.log("\n Age of third person is highest.");
  }
}
else
{
  if (age2 > age3)
  {
    console.log("\n Age of second person is highest.");
  }
  else
  {
    console.log("\n Age of third person is highest.");
  }
}


if (age1 < age2)
{
  if (age1 < age3)
  {
    console.log("\n Age of first person is lowest.");
  }
  else
  {
    console.log("\n Age of third person is lowest.");
  }
}
else 
{
  if (age2 < age3)
  {
    console.log("\n Age of second person is lowest.");
  }
  else
  {
    console.log("\n Age of third person is lowest.");
  }
}  
