cow = "moo1";
cow2 = "moo2";
cow3 = "moo3";

let cowSays = "the cow says ";
console.log(`${cowSays}mooo moooo`);

console.log(`${cowSays} ${cow}`);
console.log(`${cowSays} ${cow2}`);
console.log(`${cowSays} ${cow3}`);

let people = [
  { name: "batman", powers: "none" },
  { name: "iron man", power: "rich" },
  { name: "The Hulk", powers: "being green" },
  { name: "Superman", powers: "Being an Alien" },
];

const map1 = people.map(name);
console.log(map1);
