// fetch the book data
const bookListDiv = document.getElementById("book-list");
let bookData =[];
bookData.push("Some Book");

fetch("http://api.noroff.dev/api/v1/books")
.then(response => response.json())
.then((bookResultData) => {
    bookData = bookResultData;
    // displayBook(bookData[5])
    //passing the data in the function:
    for(const book of bookData) {
        displayBook(book);
    }

    // Using forEach loop, same result as above (latest version):
    // bookData.forEach(book => {
    //     displayBook(book);
    // });
});

// document.createElement()

function displayBook(book) {
    bookListDiv.innerHTML += `
    <div>
    <img src="${book.image}">
    <h2>
    ${book.title}
</h2>
<p>${book.price}</p>
</div>
    `
}

function filterByAuthor(authorToFilterBy){
    let filteredResults = []
    for (const book of bookData) {
        if(book.author === authorToFilterBy){
            filteredResults.push(book)
        }
    }

}