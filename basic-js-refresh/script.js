// Hour
// If hour is between 6am and 12 pm: Good morning!
// If hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 21;

if (hour >= 6 && hour < 12) {
    console.log('Good morning!')
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good evening!')
}

// MOLLIFY TASKS

// TASK 1
// Write an if statement that checks whether firstNumber is smaller than secondNumber.
// If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
} else {
    console.log("The second number is smaller than the first");
}

// TASK 2
// Write code that checks whether age meets the minimumAge requirement.
// Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
    console.log("You're old enough")
} else {
    console.log("Too young!")
}

// TASK 7
// Write a switch statement that log the weekday name depending on the value of dayOfTheWeek.
// If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
// If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 2;
var dayName;

switch (dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number"
        break;
}

console.log(dayName);




const cars = ["Tesla", "BMW", "Volvo", "Volkswagen"];

for (let i = 0; i < cars.length; i++) {
console.log('Car ' + i + ': ' + cars[i]);
}