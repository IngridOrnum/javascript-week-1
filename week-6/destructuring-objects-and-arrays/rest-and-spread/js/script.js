// Rest



function sum(...numbers) {
    let total = 0
    for (const number of numbers) {
        total += number;
    }
    return total
}

console.log(sum(1, 6, 7, 8, 9, 4, 5, 6, 7, 7))


// Spread

// ...numbers is the same as the values in the array

let duck = {
    id: 1,
    name: "Tim",
    habitat: "Swamp",
    height: 25,
    diet: "Green stuff"
}

let newDuck = {
    ...duck,
    dangerous: false
}

console.log(newDuck);