// 1.Write a function that accepts 3 arguments and returns the value of all the items added together.
const doSomething = function (a, b, c) {
  return a + b + c;
};

// 2.Write a function that has an anonymous function as the first argument and a number as the second argument.

// the anonymous function needs to console.log something.
// Have the first function count from 0 to the number that the second argument is.
// After it is done counting have it call the anonymous function.
// call the function again with a different function as the argument.

const nextFunc = function (subFunc, aNumber) {
  for (let i = 0; i <= aNumber; i++) console.log(i);
};
subFunc();

nextFunc(function());
