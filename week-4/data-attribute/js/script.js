const article = document.querySelector("#post");

console.log("Article", article);

// Check the dataset through console.dir(), scroll down.
console.dir(article);
// See only the dataset:
console.log(article.dataset);
// See the specific dataset:
console.log(article.dataset.author);
console.log(article.dataset.category);

// Task 1
//
// const article = document.querySelector("")




const postBtn = document.querySelector("#post-btn");

console.log(postBtn);

// with addEventListener:
postBtn.addEventListener("click", function(){
    alert(`Book author: ${article.dataset.author} Book category: ${article.dataset.category}`);
});

// // with onclick:
// postBtn.onclick = function(){
//     alert(`Book author: ${article.dataset.author} Book category: ${article.dataset.category}`);
// };

// without alert pop-up:
// const alert = document.querySelector(".alert");

// postBtn.onclick = function(){
//     alert.innerHTML = `
//     <h2>Author: ${article.dataset.author}</h2>
//     <p>Category: ${article.dataset.category}</p>
//     `
// };





