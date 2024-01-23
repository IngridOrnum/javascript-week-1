
// create the function find(arr, value),
// which looks for the value in the array.
// If found: arr returns the number. If not found: return -1
function find (arr, value) {
    for (let i = 0; i < arr; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

const myArray = [1, 2, 5, 1000];
const valueToSearchFor = 18;
let isNumber = find(myArray, valueToSearchFor);

console.log(isNumber);

