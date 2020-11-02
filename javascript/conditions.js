let a = 10,
    b = 20,
    c = 30;
//if statement
if (a === 10) {
    console.log("a is 10"); //not print
} else if (a == 16) {
    console.log("a is 16");
} else {
    console.log("a is not 16");
}

a === 10 ? "yes!" : "no"; //yes!    means if equal yes otherwise no

let i = 10;
//if you need to only do one thing this is
//is an elegant solution
if (i > 5) console.log("do single thing");

//switches

let a = 10;

switch (a) {
    case 20:
        console.log("a is 20");
        break;
    case 15:
        console.log("a is 15");
        break;
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log("I really don't know");
}

let number = 12; //random input from user
let output = null;
switch (
    true //doing this compares to see if each expression is true
) {
    case number < 3:
        output = "low";
        break;
    case number < 7:
        output = "med";
        break;
    case number < 14:
        output = "high";
        break;
    default:
        output = "very high";
}
console.log(output);