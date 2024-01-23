
import products from "./data/products.js";

let productContainer = document.querySelector(".products-container");

const favourites = document.querySelectorAll(".heart");

//2. Fill the container of the products with products
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    productContainer.innerHTML += `
            <div class="product">
                <img alt="Random photo" src="https://fastly.picsum.photos/id/1043/200/300.jpg?hmac=3l-zIM3sjEYfLwln1cOurui-983Bxq1zjEYt9HeScyQ">
                <h3>${products[i].name}</h3>
                <h4>NOK ${products[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart" data-name="${products[i].name}" data-id="${products[i].id}" data-price="${products[i].price}" fill="none" height="24" stroke="#000000" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </span>
            </div>
`;
}

// loop on the dom elements
let favs = [];

for (let i = 0; i < favourites.length; i++) {
    favourites[i].addEventListener("click", function (){
        console.log("Hey, you clicked me")
        this.classList.toggle("heart-active")


        favs.push({
            name: this.dataset.name,
            id: this.dataset.id,
            price: this.dataset.price
        })
        console.log(favs)
        window.localStorage.setItem("favourites", JSON.stringify(favs))

    });
}


function favs {

}