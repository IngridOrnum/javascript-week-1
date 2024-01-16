// setInterval

// the setInterval method is similar to the setTimeout, but it executes
// a function at a certain interval until it is cleared.
// When need to add a counter to make the counting stop.

// let count = 0;
//
// const intervalId = setInterval(function (){
//     console.log("Hello from the other world!");
//     count++; //increment
//     if (count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

// the counting now stops at 5.

// Task: add list elements to html

const container = document.querySelector(".container");

let counter = 0;

const ulIntervalId = setInterval(function () {
    counter++;
    container.innerHTML += `<li>King the ${counter}</li>`;
    if (counter === 5) {
        clearInterval(ulIntervalId);
    }
}, 1000);


// Task:
// 1. Create an empty user object.
// 2. Add a name property with the value Jonas.
// 3. Add a surname property with the value The Great.
// 4. Remove the name property from the object.

//1
let user = {}

//2
user.name = "Jonas";
//3
user.surName = "The Great";
//4
user.name = "Helene";

//4
delete user.name;

console.log(user);

let user2 = {

}

// Task 2
// Create a function isEmpty(obj) that returns true if the object has no properties,
// and false if there is at least one property

const isEmpty = (user) => {
    return Object.keys(user).length === 0
}

console.log(isEmpty(user2));

function isEmpty (obj){
   for (let key in obj){
       return false;
   }
   return true;
}
