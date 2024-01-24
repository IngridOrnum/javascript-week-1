console.log("Checking");

const carName = "   B   M   W   ";

// trim() - build in function, which remove excess spaces in the beginning and in the end of a strings.
// replace() - removes all spaces in the string.

const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');
console.log(trimmedCarName);




