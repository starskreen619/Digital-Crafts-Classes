let header = document.querySelector("h1");
console.dir(header);
header.style = "border-bottom:1px solid;text-align:right;color:#446699;";

let ideas = document.querySelectorAll(" .child-idea");

let styleString = "background:red;font-size:2em;font-weight:bold;";

ideas.forEach(function (idea, idx) {
  idea.style = styleString;
});

header.style.color = "green";
header.style.botterBottom = "4px dashed purple";
