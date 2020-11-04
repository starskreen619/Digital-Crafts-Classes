// let spaceship = {
//   speed: 35,
//   acceleration: 4,
//   passangers: 6,
//   fuel: 15,
// };

// spaceship.payLoad = 10;

// console.log(spaceship);

// for (a in spaceship) {
//   if (!spaceship.hasOwnProperty(a)) continue;
//   console.log(a, ":", spaceship.passangers);
// }

//////////////////////////////

// 1. Make an array of ship objects (at least 3). Each ship needs a name, topSpeed, acceleration, and cargo capacity.

let ship = [
  {
    name: "falcon",
    topSpeed: 800,
    acceleration: 200,
    cargoCapacity: 10000,
  },
  {
    name: "falcon heavy",
    topSpeed: 1000,
    acceleration: 300,
    cargoCapacity: 20000,
  },
  {
    name: "discovery",
    topSpeed: 2000,
    acceleration: 100,
    cargoCapacity: 30000,
  },
];

// -console.log the name and top speed of the 2nd ship.
console.log(ship[1].name, ship[1].topSpeed);

// -loop through the array and print out every stat in a key:value style.
ship.forEach(function (ship) {
  console.log(ship);
});

// -(Bonus) sort the array by the ship with the fastest speed and console log it out.
ship
  .sort(function (a, b) {
    return a.topSpeed - b.topSpeed;
  })
  .reverse(); // reverses the order
console.log(ship);
