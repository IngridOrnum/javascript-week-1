
// create the function find(arr, value),
// which looks for the value in the array.
// If found: arr returns the number. If not found: return -1
const myArray = [1, 2, 5, 1000];
const valueToSearchFor = 18;
let isNumber = find(myArray, valueToSearchFor);

function find (arr, value) {
    for (let i = 0; i < arr; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

console.log(isNumber);


// Practice 1

const books = ["The Hobbit", "Harry Potter", "Winnie the Pooh"];
console.log(books);

const result = books.find(findHarry);

function findHarry(item) {
    return item === "Harry Potter";
}

console.log(result);

// Practice 2

const array = [
    { id: 123, name: "Ringo"},
    { id: 234, name: "Marko"},
    { id: 345, name: "Scott"},
    { id: 456, name: "Biko"},
    ];


