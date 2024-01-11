// 1. create an array with many object

let news = [
    {
        headline : "Watch Hesh landing on the moon",
        summary : "He landed with his super jet"
    },
    {
        headline : "Minions take over the world",
        summary : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        headline : "Kim Kardashian selected as president",
        summary : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
];

console.log(news[1].headline);

// 2. Select the class
let newsDiv = document.querySelector(".news");
console.log(newsDiv);

// 3. Make a loop
const totalNumberOfNews = news.length;

function createNews() {
    let newsItem = "";

    for (let i = 0; i < totalNumberOfNews; i++) {
        console.log(news[i].headline);
        console.log(news[i].summary);

        newsItem = newsItem + `
    <div>
    <h2>${news[i].headline}</h2>
    <p>${news[i].summary}</p>
    </div>
`
    }
    return newsItem;
}

newsDiv.innerHTML = createNews(news);

console.log(news);


//---------------------------------------------------

const dogs = [
    {
        name: "Ringo",
        breed: "Kromfohrländer"
    },
    {
        name: "Marko",
        breed: "Poodle"
    },
    {
        name: "Scott",
        breed: "Flat Coated Retriver"
    }
];

function getName(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

getName(dogs);

const horses = [
    {
        name: "Agility",
        breed: "Norsk Varmblods"
    },
    {
        name: "Sano",
        breed: "Lipizzaner"
    },
    {
        name: "Max",
        breed: "Frieser"
    }
];

getName(horses);
