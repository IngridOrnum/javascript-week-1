// 1. If and else
// 2. Switch
// 3. Scope


// Check the log:
console.log("here");

// ----------------------------------------------------------

// 1. if and else statements

// if () {
//
// } else {
//
// }

// Temp example

let temp = 34;

// if temp is greater than 30 degrees, console log the text.
if(temp > 30 ){
    console.log("It's very hot, man!")
} else if (temp > 20) {
    console.log("The weather is nice :)")
} else {
    console.log("The weather is very cold!");
}


// Task: exam score. Score < 50 = fail. Score > 50 = passed.

let score = 60;

if(score > 50) {
    console.log("You passed!")
} else if (score < 50) {
    console.log("You failed.")
}

// Task: exam score, more outcomes.

let test = "A";

if (test === "A") {
    console.log("Very good! " + "You got " + test);
} else if (test === "B") {
    console.log("Good!")
} else if (test === "C") {
    console.log("Average");
} else if (test === "D") {
    console.log("Study more.");
}

// to make a new line, write: "\n"

const sentence = "First sentence \n Second sentence.";
console.log(sentence);

// ----------------------------------------------------------


// 2. Switch case: traffic lights

let color = "green";

switch (color) {
    case "red":
        console.log("Stop!")
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("No traffic lights");
}

// Task: grade

let grade = "A";

switch (grade){
    case "A":
        console.log("Outstanding!")
        break;
    case "B":
        console.log("Very Good!")
        break;
    case "C":
        console.log("Good Effort!")
        break;
    case "D":
        console.log("Practice more.")
        break;
    case "F":
        console.log("You failed the test.")
        break;
    default:
        console.log("No grade given.")
}

// ----------------------------------------------------------


// 3. Scope

var name = "hesham"; // global scope
let myName = "hesham"; // function scope

// ex: var
var greeting = "Hello";

if (true){
    var greeting = "Hi"; // re-declaired my variable
    console.log(greeting);
}
console.log(greeting); // Hi

// ex: let
let message = "Hello";

if(true) {
    let message = "Hi";
    console.log(message);
}

console.log(message);

// const: you define it once in your application.
// lets you define it and then you change the value of it.

const MY_NAME = "Ingrid";
if(true){
    let MY_NAME = "Ornum";
    console.log(MY_NAME);
}

console.log(MY_NAME);
