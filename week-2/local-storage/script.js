// // Task: create a function in my calculator to sum three number. Write it in a function, and store it locally.
// function addThreeNumbers(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
//
// // Store it locally (like in a "box")
// let result = addThreeNumbers(10, 20, 50);
//
// console.log("Sum: ", result);
//
// // Repeating the task, just multiplying.
// function calcNum(n1, n2, n3) {
//     return n1 * n2 * n3;
// }
//
// let sum = calcNum(12, 34, 56);
//
// console.log(sum);
//
// // TASK 1. Select the h1 and change heading.
//
// 1. First select the h1.

let heading = document.querySelector("h1");
let button = document.querySelector("button");
let buttonColors = document.querySelector(".colors");
let body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "Det er en god dag!";
}

// Connect it to the button and run the function

button.onclick = changeHeading;

// 2. Change the body bg color to blue.

function changeColor() {
    body.style.backgroundColor = "blue";
    heading.style.color = "black";
}

buttonColors.onclick = changeColor;

// ----------------------------------------------------------------------------

// Functions inside objects

let catBtn = document.querySelector(".cat-btn");

const pet = {
    type: "Cat",
    name: "Ulla",
    age: 10,
    isFriendly: true,
    mewMew: function (){
        console.log("The sound of the Cat", pet.mewMew);
    }
};

console.log(pet.type);
console.log("Is the cat friendly? ", pet.isFriendly);

// pet.mewMew();
console.log(catBtn);

catBtn.onclick = pet.mewMew;
