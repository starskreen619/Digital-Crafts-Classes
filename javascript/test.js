// 1. Write a program that will declare a variable named "value".
// Have an if, if else, else statement that compares that value.
let value = 100;
if (value === 100) {
  console.log("Your value is 100");
} else if (value !== 100) {
  console.log("Your number is not cool");
}
// 2.using ternary.
// compare if one number is greater than another.
// set the value of a variable named 'result' to 'higher' if the first number is higher and lower if the first number is lower.
let num1 = 50;
let num2 = 100;
let result = "result";

num1 >= num2 ? (result = "higher") : (result = "lower");
console.log(result);

// 3. Using switch.
// set a variable named = 'temp' and give it a value between -20 & 110.
// Have cases for sub 0, 30, 50, 75, 80, 90, and above.
// Have a hex color for each level going from blue to red.
// print out the color that represents the range.
//     /* results */
//     temp = 50;
//     color = null;
//     ... //your code
//     console.log(color) //#cdff74 (kinda light green)
let temp = 100;

switch (true) {
  case (temp <= 0):
    console.log(#3147cd);
    break;
  case (temp >== 1 && temp <== 30):
      console.log()
    case (temp >== 1 && temp <== 30):
    console.log()
    break
    case (temp >== 31 && temp <== 50):
    console.log()
    break
    case (temp >== 51 && temp <== 75):
    console.log()
    break
    case (temp >== 76 && temp <== 80):
    console.log()
    break
    default:(temp >== 81 && temp <== 90):
      console.log()
      

}
console.log(temp);
