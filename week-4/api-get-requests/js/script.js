const API_URL = "https://catfact.ninja/facts"; // Link for the back-end application the API
const factsContainer = document.querySelector(".facts-container");

//Fetch() is a function. After the link is fetched, then() change it to json data.
// fetch(API_URL).then((response) => response.json())
//     .then((catsData) => {
//         console.log("data:", catsData.data);
//     });

// Now I got the data, and I can use it.

fetch(API_URL).then((response) => response.json())
    .then((factsData) => {
        console.log("data:", factsData.data);
        const totalNumberOfFacts = factsData.data.length;
        for(let i = 0; i < totalNumberOfFacts; i++){
            factsContainer.innerHTML += `
            <div>
            <span>${factsData.data[i].fact}</span>
            </div>
            `
        }
    });