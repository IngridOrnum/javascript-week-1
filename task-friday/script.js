const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

//----------------------------------------------------------------

const booksContainer = document.querySelector(".book-container");
console.log(booksContainer);

let html = "";

let allBooks = books.length;
console.log(allBooks);

for (let i = 0; i < allBooks; i++) {
    console.log(books[i]);

    html += `
    <div class="book">
    <h2>${books[i].title}</h2>
    <p>Author: ${books[i].author}</p>
    <p>Availability: ${books[i].available ? "Available": "Unavailable"}</p>
    </div>
    `;
    console.log(html);
}

booksContainer.innerHTML = html;