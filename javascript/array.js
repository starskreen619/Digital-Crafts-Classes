// let myArray = [];

let myArray = ["a", "b", "c"];
console.log(myArray[0]);

myArray.push("d");
console.log(myArray);

let remove = myArray.pop();
console.log(remove);
console.log(myArray);

myArray.unshift("z"); // adds items to the front of the array
console.log(myArray);

let myArray = ["a", "b", "c"];
myArray.forEach(function (letter, idx) {
  console.log(letter, idx);
});
