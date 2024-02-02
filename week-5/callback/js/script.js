// void = term with a function that doesn't do anything / give back anything.

// function someData(){};

function doSomethingThatReturnAString() {
    return "this is easy";
}

// call the function or store it in a variable, like below:
let result = doSomethingThatReturnAString();

console.log(result);

// HOF (higher order functions) and Callbacks
function doSomething(someParam) {
    console.log("I do something");
    console.log("I do something");

    someParam()

    console.log("I do something");
    console.log("I do something");
}

// A callback: Provide code to other functions. Used when you want to change specific things in a code, while other things in the code is consistent.
doSomething(function(){console.log("I am a callback")});


