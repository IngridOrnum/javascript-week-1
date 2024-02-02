// data (below is an object)
let todos = [];

// Using fetch syntax
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (httpResponse) {
        return httpResponse.json();
    })
    .then((data) => console.log(data));


// Same result as above, nut using async
async function getTodos() {
    let httpResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await httpResponse.json();
    console.log(data);
}

getTodos();


// First get the link, then do the response.
let todo = fetch("https://jsonplaceholder.typicode.com/users")
    .then((httpResponse) => {
        // extract the data (using the json function)
        return httpResponse.json();
    })
    .then((todoResult) => {
        // do something with the data (store it in the todos variables)
        todos = todoResult;
    });

// This will console log first, because the code above is slower to process.
console.log("other stuff");

// post-request to add new data to the api.
// get request is just used to get an existing api.


fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


// delete

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
}).then((response) => {
    console.log(response)
});


// SQUARE EYES TASK

let movieContainer = document.querySelector(".movie-container");


let squareEyes = fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let movies = result;
        for(var i = 0; i < movies.length; i++){
            movieContainer.innerHTML += `
            <div> 
            <img src="${movies[i].image}">
            <h2 id="movieTitle">${movies[i].title}</h2>
            <span>${movies[i].description}</span>
            <span>${movies[i].price}</span>
            </div>`
        }
    });







