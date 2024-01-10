// 1. Variables

// Ecmascript


// LOOPS
// starting point // condition // increment

for (let i = 1; i < 11; i++) {
    console.log(i);
}


// Array

let myBigBox = ["hesham", 22232, false, {name: "Ringo"}];

console.log(myBigBox.length);

console.log(myBigBox[3].name);

// Select the last item in array
const lastItemBox = myBigBox.length - 1;
console.log("The last item in the array is number", lastItemBox);

console.log(myBigBox[lastItemBox]);


// Looping over an array

for (let i = 0; i <= myBigBox.length; i++){
    console.log(myBigBox[i]);
}

// Concatenation

let name = "Anniken";
let secondName = "Hesh";
let thirdName = "Patrick";

console.log("Hello " + name + " and " + thirdName);

// Functions

function logWord(name) {
    if (name !== undefined) {
        console.log("Hello " + name + " Sir")
    } else {
    console.log("Sorry!");
    }
}

logWord("Hesham");