// ARRAYS AND OBJECTS

// 1. Adding more items in the array. Starting off it has 3 items.

const fruits = ["Apple", "Blueberry", "Oranges"];
console.log(fruits.length); // total 3 items in the array.

// .push is a build-in function. This will add one more fruit in the array.
fruits.push("Mango");
console.log(fruits);

// Now there are four items in the array, and the mango nr 3 in the array.

//----------------------------------------------------------------------------------------

// 2. Adding items in the beginning of the array.

fruits.unshift("Grapes");
console.log(fruits);

// Now the grapes are added and comes first in the array (no. 0).

//----------------------------------------------------------------------------------------

// 3. Removing items in an array:

// The last item:
fruits.pop();
console.log("Using pop:", fruits);

// The first item:
fruits.shift();
console.log("Using shift:", fruits);


//----------------------------------------------------------------------------------------

// 4. Sorting an array:

const numbers = [3, 4, 100, 88, 54, 5];

// only sorting first number
numbers.sort();
console.log(numbers);

// sorting all numbers
numbers.sort((a, b) => a - b);
console.log(numbers);


//----------------------------------------------------------------------------------------

// 5. Find the index of an items

//             0      1       2
const cars = ["bmw", "vw", "toyota"];

console.log("the index of vw is ", cars.indexOf("vw"));

//----------------------------------------------------------------------------------------

// 6. Declare an object.

const user = {
    name : "Monde",
    age: 30,
    job: "Software Engineer",
    wealth: 21000000000000
}

console.log(user);

console.log(user.age);
console.log(user.name);
console.log(user.wealth);

console.log("Hello, my name is", user.name, "and I am", user.age, "years old. I own", user.wealth, "in dollars and I work as a", user.job);

console.log("Hello, my name is " + user.name + " and I am " + user.age + " years old. I own " + user.wealth + " in dollars and I work as a " + user.job);

console.log("")

const someText = `Hello, my name is ${user.name} and I am ${user.age} years old. I own ${user.wealth} in dollars and I work as a ${user.job}.`;
console.log(someText);

//----------------------------------------------------------------------------------------

// 7. Select specific items with function: .find

const books = [
    {
        title: "The Hobbit",
        author: "JRR Tolkien",
        pages: 300
    },
    {
        title: "Drive with me in my car",
        author: "Kevin Hart",
        pages: 1000
    },
    {
        title: "1000 nights",
        author: "Some Guy",
        pages: 3000
    }
]

// Access specific books: (not best practice)
console.log("My first book", books[0]);
console.log("My first book", books[1]);

// Access specific books: (best practice):
const searchBook = books.find(function (book){
    return book.title === "The Hobbit";
});

console.log(searchBook);

// Find books with more than 300 pages:

const moreThan300 = books.filter(function (book){
    return book.pages > 300;
});

// The .find function expects an either true og false in return.

//----------------------------------------------------------------------------------------

// 8. Functions

// A function is a sett of actions or code run when we call this function name.

function doorBell (withCamera) {
    console.log("I open the door and see " + withCamera);
}

doorBell ("a visitor");

// logWord ("Hesham");
// logWord ("Line");

// Adding numbers
function addTwoNumbers (num1, num2){
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);

console.log("SUM:", sum);

//--------------------------------------------------------------------------------------------------------------

// :: TASK 1: Array Manipulation ::

// 1. Array Operations
// - Create an array named fruits with three initial items: "Apple", "Blueberry", "Oranges".
const frukt = ["Eple", "Blåbær", "Appelsin"];
console.log(frukt);

// - Use .push() to add "Mango" to the fruits array. Output the updated fruits array after adding "Mango".
frukt.push("Mango");
console.log(frukt);

// 2. Adding and Removing from Array
// - Add "Grapes" to the beginning of the fruits array using .unshift().
frukt.unshift("Druer");
console.log(frukt);

// - Remove the last item from the fruits array using .pop().
frukt.pop();
console.log(frukt);

// - Remove the first item from the fruits array using .shift().
frukt.shift();
console.log(frukt);

// 3. Sorting an Array
// - Create an array named numbers with the values: 3, 4, 100, 88, 54, 5.

const nummer = [3, 4, 100, 88, 54, 5];
console.log(nummer);

// - Sort numbers array in ascending order using .sort().
nummer.sort((a, b) => a - b);
console.log(nummer);

// :: Task 2: Object Manipulation ::

// 1. Object Basics
// - Create an object named user with properties: name, age, job, wealth.
let userProperties = {
    name: "Ringo",
    age: 2,
    job: "being a dog",
    wealth: "120 toys"
}

console.log(userProperties);

// - Access and display individual properties of the user object.
console.log(userProperties.name);

// - Create a formatted string using object properties to display information about the user.
const textUserProperties = `My name is ${userProperties.name} and I am ${userProperties.age} yrs old. My job is ${userProperties.job} and I love it! I've earned ${userProperties.wealth} so far in my profession!`
console.log(textUserProperties);

//  :: Task 3: Working with Functions ::
// 1. Function Utilization
// - Create a function doorBell that takes a parameter withCamera and logs a message related to the doorbell action.
function doorKnock (withCamera) {
    console.log("Knock, knock! " + withCamera)
}

doorKnock("Someone is knocking, better get the door!");

// 2. Function for Arithmetic
// - Create a function addTwoNumbers that takes two parameters num1 and num2 and returns their sum.
function twoNumbersAdded (num1, num2){
    return num1 + num2;
}

const SUM = twoNumbersAdded(45, 80);
console.log("Output:", SUM);

// 3. Find and Filter from Array of Objects
// - Utilize .find() to search for a specific book from the books array.

const lp = [
    {
        artist: "John Olav Nilsen og Gjengen",
        album: "For sant til å være godt",
        release: "2009"
    },
    {
        artist: "The Stone Roses",
        album: "The Stone Roses",
        release: "1989"
    },
    {
        artist: "Greta Van Fleet",
        album: "The Battle at Garden's Gate",
        release: "2021"
    }
]

console.log(lp);

// - Use .filter() to find lp with release date 1990 and older.
const modernLp = lp.filter(function (lp){
    return lp.release > 1990;
});

console.log(modernLp);
