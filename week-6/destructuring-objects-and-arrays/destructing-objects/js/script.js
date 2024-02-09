// To write

let duck = {
    id: 1,
    name: "Tim",
    habitat: "Swamp",
    height: 25,
    diet: "Green stuff"
}

let duckName = duck.name
let duckHabitat = duck.habitat
let duckDiet = duck.diet

console.log("The duck was named " + duckName);

//The line below is an example of destructuring, much quicker way of printing out the values of the object:
let {name,habitat,height} = duck

console.log(name);
console.log(habitat);
console.log(height);