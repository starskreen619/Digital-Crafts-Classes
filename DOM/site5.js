let num = 0;

let myButton = document.querySelector("#more-info");
myButton.classList.add("primary");

let childIdea = document.querySelector(".child-idea");
childIdea.classList.add("btn");

const funct1 = function (evt) {
  num++;
  if (num == 11) {
    myButton.removeEventListener("click", funct1);
    myButton.style.backgroundColor = "red";
  } else myButton.innerHTML = "click" + num;
  console.log("funtion 1 was fired");
};

const funct2 = function () {
  console.log("funtion 2 was fired");
};

myButton.addEventListener("click", funct1);
myButton.addEventListener("click", funct2);
