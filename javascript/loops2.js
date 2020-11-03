// 1.Using a while loop add numbers from 1 to 10.
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

console.log("#######Break##########");
// 2.Using a for loop, count from a number of your choice to another number.
let num = 5;
while (num < 50) {
  if (num == 50) break;
  console.log(num);
  num++;
}
console.log("#######Break##########");
// 3.Using a for loop, start with a number and then divide and replace that number by each number from 6 to 2.

number = 8;
let value = 0;
while (number > 0) {
  if (number % 2 && number % 3) {
    value += number;
  }
  number--;
}
console.log(value);

///////////////or
number = 200
value = 0
let i = 0
for(let i =0; i<number; i++){
  //if i % 2 !=0 && i % 3 ! = 0 ? value += i : null
  if(i % 2 !=0 && i%3){
}
console.log(value)
// n = 300 //you choose a number
// ... // your code
// console.log(n)
// //something like 0.000496031746031746

// 4.Using either type of loop add all of the numbers not divisible by 2 and 3 from 0 to a number of your choice.
