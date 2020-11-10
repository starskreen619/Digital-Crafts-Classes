const funcOne = (a) => {
  console.log(a * 2);
};

console.log(funcOne(3));

//////

arr = ["clint", "bob"];

const funcTwo = () => {
  return arr.forEach((element) => {
    console.log(element + 1);
  });
};

funcTwo();
