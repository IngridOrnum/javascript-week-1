// Loop is for repeating!

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Looping or iteration

// 1
// 2
// 3
// 4
// 5

// i is now 1
// true >

// i++ == i = i+1
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

//
// for(initialization; condition; increment;) {}
// for(initialization: i is this number; condition: I want to keep counting as long as the i is less than 5; )

for(let i = 0; i <= 5; i++){
    console.log(i);
}

// How the computer read the code:

// i = 0
// true
// i = 1

// i = 1
// true
// console.log (1)
// 1 + 1 = 2
// i = 2

// i = 2
// true
// console.log (2)
// 2 + 1 = 3
// i = 3

// i = 3
// true
// console.log (3)
// 2 + 1 = 4
// i = 4

// i = 4
// true
// console.log (4)
// 2 + 1 = 5
// i = 5

// i = 5
// false

// ------------------------------------------------------------

// Task: loop numbers 1 to 10.

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// ----------------------------------------------------------

            // 0       1        2       3
const cars = ["Tesla", "BMW", "Volvo", "Volkswagen"];

console.log(cars[0]); // See each array

console.log(cars.length); // see how many items in the array

const totalNumbersOfCars = cars.length;

for(let i = 0; i < totalNumbersOfCars; i++) {
    console.log(cars[i]);
}

// ----------------------------------------------------------

// Task: write an array of fruits, code a loop to print each fruit in the array.

const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits.length);

const allFruits = fruits.length;

for(let x = 0; x < allFruits; x++) {
    console.log(fruits[x]);
}

// How to get the last item in the array

console.log(fruits[fruits.length -1]);
//or
const lastItemInArray = fruits.length -1;
console.log(fruits[lastItemInArray]);

// ----------------------------------------------------------




