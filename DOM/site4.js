let myButton = document.querySelector("#more-info");
myButton.classList.add("primary");

document.querySelector("button").onclick = function (evt) {
  evt.target.classList.toggle("btn");
};
