let myArray = ["a", "b", "c"];
let myArray2 = [4, 5, 6];

let newArray = [...myArray, ...myArray2];
console.log(newArray);

/////////////////////
console.log("Separator");
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

//////////////////////
console.log("Separator");

let removedCars = updatedCars.filter((old) => old.year > 2018);
console.log(removedCars);

console.log("Separator");

////////////////////////

let newFocus = [
  {
    make: "ford",
    model: "focus",
    year: 2020,
  },
];

let focusAdd = [...newFocus, ...updatedCars];

console.log(focusAdd);

console.log("Separator");

//////////////////////////////////

let carAge = focusAdd.sort((a, b) => b.year - a.year);
console.log(carAge);
