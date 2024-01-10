const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];

//---------------------------------------------------------------

// Select the pet-container class
const petContainer = document.querySelector(".pet-container");
console.log(petContainer);

// Create a html variable to hold our html in it when we use the loop

let html = "";

// Loop over the array

let allPets = pets.length;
console.log(allPets);

for (let i = 0; i < allPets; i++) {
    console.log(pets[i]);

    html += `
    <div class="pet pet-detail">
    <p>Color : ${pets[i].colour}</p>
    <h2>Age : ${pets[i].age}</h2>
    <p>Friendly : ${pets[i].friendly ? "true" : "false"}</p>
    </div>
    `;
    console.log(html);
}

petContainer.innerHTML = html;


// change the innerHTML

