// setTimeout
// = a build in function which is used to execute a function after a specific period.

// 1. Task: after 5 seconds, it will pop up a name

// Version 1
setTimeout(function (){
    console.log("Hello Jack");
}, 5000);

// Version 2
setTimeout(logHello, 5000);

function logHello (){
    console.log("Hello Jack");
}


// 2. Task: Change "downloading div"

    // 1 - select loader element with class

const loading = document.querySelector(".loader");
console.log(loading);

    // 2 - use the setTimeout
setTimeout(function () {
    // 3 - change the inner html of the loading
    loading.innerHTML = "Finished loading.";
}, 5000);


// // 3. Task: Make the number count down from 10-1-Finished.
//
// const counter = document.querySelector(".counter");
// console.log(counter);
//
// setInterval (function () {
//     counter.innerHTML = "9";
// }, 1000);


// 4. Task: Make the heading appear (display none in css)

const offer = document.querySelector(".ad");
setTimeout(function () {
    offer.style.display = "block";
}, 3000);






