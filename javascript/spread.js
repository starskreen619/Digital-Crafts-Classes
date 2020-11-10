let myArray = ["a", "b", "c"];
let myArray2 = [4, 5, 6];

let newArray = [...myArray, ...myArray2];
console.log(newArray);

/////////////////////

const cars = [
  {
    make: "Chevy",
    model: "Corvette",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
  },
  {
    make: "GMC",
    model: "h2",
    year: 2010,
  },
];

let newCars = [
  {
    make: "fiat",
    model: "one",
    year: 2010,
  },
  {
    make: "jeep",
    model: "rubicon",
    year: 2011,
  },
];

let updatedCars = [...cars, ...newCars];
console.log(updatedCars);

//////////////////////s

let removedCars = 
