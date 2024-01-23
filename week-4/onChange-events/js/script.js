console.log("Check");

// Select my dropdown:
const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circles-container");

console.log(dropdown);
console.log(circlesContainer);

html = "";

//Assign it to an anonymous function
dropdown.onchange = function () {
    circlesContainer.innerHTML = "";
    console.log("I am changed");
    for(let x = 1; x <= this.value; x++){
        console.log(x);
    //TODO add elements in the circlesContainer
        circlesContainer.innerHTML += `
            <div class="circle">${x}</div>
        `
    }
};

// PRACTICE

const colorSelector = document.querySelector("#color-selector");
const colorContainer = document.querySelector(".color-display");

console.log(colorSelector);
console.log(colorContainer);

html = "";

colorSelector.onchange = function (seeColor) {
    colorContainer.innerHTML = "";
    console.log("I am changed");
    var newColor =
}


