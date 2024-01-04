// Variables

var myName = "Erica";
console.log(myName); // Output: Erica

let age = "26";
console.log(age); // Output: 26

const MAKE = "BMW";
console.log(MAKE); // Output: BMW



// Data types (string, number, etc.)

let greeting = "Hello, World!";
console.log(typeof greeting); // To find out what data type this is, write "typeof". This is a string.

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // Output: boolean

let someVar;
console.log(typeof someVar); // It is unidentified, because you haven't put anything in it.

let emptyValue2 = null;
console.log(typeof emptyValue2); // Output: object (should be "null" Hesh says)



// Object (where all information is stored, ex personal information (name, age, bank account)

let person = {
    firstName: "Hesham",
    lastName: "El Masry",
    age: 31
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);


// Task: create an object for a car. Car details: volvo, 1992, used condition, 10k worth.

let car = {
    model: "Volvo",
    productionYear: "1992",
    condition: "used",
    worth: "10k"
};

console.log(car);
console.log(car.model);
console.log(car.productionYear);
console.log(car.worth);

// if you need to change the data, you can write the code like this (two ways, the last one best):
console.log("I have a "
    + car.model + " and it is a "
    + car.productionYear
    + " and it is worth 10k.")

console.log(`I have a ${car.model} and it is a ${car.productionYear}. It is worth 10k.`)



// Array

let colors = ["Red", "Green", "Blue"];

let random = [
    55656, // 0
    "Green", // 1
    { name: "Hesh", age: 31} // 2
    ["boy", "girl", "whatever"] // 3
];

// to access the items in the array:
console.log(random[0]); // first item in the array
console.log(random[1]); // second item in the array

// .3 Type conversion

let year = "1992"; // String

// from string to number

let convertedYear = parseInt(year);
//test:
console.log(typeof year); //string
console.log(typeof convertedYear); //number


// convert from number to string

let num = 123;

console.log(num.toString());


// TASKS

// Task 1: Declaring variables

// 1.
var city = "Edinburgh";

// 2.
let youth = "26";

// 3.
const birthYear = "1997";

// 4.
console.log(city);
console.log(youth);
console.log(birthYear);

// Task 2: Datatypes

// 1.
let greetings = "Hello, everybody!";
console.log(typeof greetings);

// 2.
let quantity = 100;
console.log(typeof quantity);

// 3.
let isJavascriptFun = true;
console.log(typeof isJavascriptFun);

// 4.
let thisIsUndefined = "No identity";
console.log(typeof thisIsUndefined);

// 5.
let emptyValue;
console.log(typeof emptyValue);


// Task 3 Type conversion

// 1.
let numString = "25";

// 2.
let convertNum = parseInt(numString);
console.log(typeof convertNum);
console.log(typeof numString);

// 3 + 4.
let num2 = 50;
console.log(num2.toString());
console.log(typeof num2);

// 5.
console.log(num2 + numString);



