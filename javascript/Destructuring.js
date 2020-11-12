let [a, b, ...rest] = [1, 2, 3, 4];

second = b;

console.log(second);

first = a;
console.log(first);

rest = rest;

console.log(rest);

console.log("*****brake*******");

////////////////////////

let ship = {
  name: "carrier",
  age: 40,
  speed: 70,
  acceleration: 3,
  cooless: "Awesome",
};

const { name, age } = ship;
console.log(name, age);

console.log("*****brake*******");

const { acceleration } = ship;
console.log(acceleration);

console.log("*****brake*******");

const { age, speed } = ship;
console.log(age, speed);

let { age: ship_age, speed: ship_speed } = ship;
