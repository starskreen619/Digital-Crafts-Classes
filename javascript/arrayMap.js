let cars = [
  {
    name: "toyota",
    speed: 45,
    passangers: 4,
  },
  {
    name: "kia",
    speed: 15,
    passangers: 3,
  },
  {
    name: "ford",
    speed: 85,
    passangers: 1,
  },
];

let carName = cars.map((vehicle) => vehicle.name);

console.log(carName);

//

let toDo = [
  {
    key: "one",
    id: 1,
    todo: "trash",
    status: "completed",
    deadline: "12/12/2020",
  },
  {
    key: "two",
    id: 2,
    todo: "study",
    status: "todo",
    deadline: "10/12/2020",
  },
  {
    key: "three",
    id: 3,
    todo: "homework",
    status: "in-progress",
    deadline: "12/11/2020",
  },
  {
    key: "four",
    id: 4,
    todo: "party",
    status: "completed",
    deadline: "12/02/2021",
  },
  {
    key: "five",
    id: 5,
    todo: "family",
    status: "in-progress",
    deadline: "02/12/2021",
  },
  {
    key: "six",
    id: 6,
    todo: "rest",
    status: "todo",
    deadline: "01/12/2021",
  },
];

let completedItem = toDo.filter((to) => (to.status == "todo" ? true : false));
console.log(completedItem);

//

let now = new Date().getTime();
let soonest = todo
  .sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
  .find((t) => {
    if (t.deadline.getTime() > now && t.status == "todo") {
      return true;
    }
  });

//

let past = toDo.filter(
  (t) => t.deadline.getTime() < now && t.status === "todo"
);

console.log(past);
