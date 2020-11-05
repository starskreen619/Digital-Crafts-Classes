let footer = document.querySelector("footer");
footer.classList.add("highlighted");

let myButton = document.querySelector("#more-info");
myButton.classList.add("btn", "primary");

mainIdea.classList.remove("foo-bar"); // clear errors for just in case

let myInterval = setInterval(function () {
  myButton.classList.toggle("hidden");
}, 500); // 500 miliseconds

footer.classList.replace("highlighted", "primary");
