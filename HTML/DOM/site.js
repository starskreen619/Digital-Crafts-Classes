alert("Look I am loaded");
console.log("This is in the console.");

// let header = document.createElement("header");
// main.append("This is my header");

let content = document.createElement("ul");
let bList = document.createElement("ul");
console.log(content, bList);
// let main = document.querySelector("main");

for (let i = 0; i < 6; i++) {
  let l = document.createElement("li");
  l.append(`This is item #${i}`);
  bList.append(l);
}
let main = document.querySelector("main");
main.append(content, bList);

let myList = [
  { url: "http://www.google.com", id: "google-link", text: "Goto Google yo!" },
  { url: "http://www.google.com", id: "google-link", text: "Goto Google yo!" },
  { url: "http://www.google.com", id: "google-link", text: "Goto Google yo!" },
];

let ul = document.createElement("ul");
main.append(ul);
myList.forEach(function (item) {
  let a = document.createElement("a");
  a.href = item.url;
  a.innerText = item.text;
  let l = document.createElement("li");
  l.append(a);
  ul.append(l);
});

// let main = document.querySelector("main");
// main.id = "main-content";
