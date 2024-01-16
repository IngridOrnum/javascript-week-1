import productsData from "./data/products.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".products-container");

const favourites = getExistingFavs();

//loop over the array

for (let i = 0; i < products.length; i++) {
    let cssClass = "";
    // check is the product exist in the array of favs in local storage.
    // if it exist, add the class .active-heart to it
    const doesObjectExist = favourites.find(function (fav) {
        return parseInt(fav.id) === products[i].id;
    })
    if (doesObjectExist) {
        cssClass = "active-heart";
    }
}

//2. Fill the container of the products with products
for (let i = 0; i < productsData.length; i++) {
    console.log(productsData[i]);
    productContainer.innerHTML += `
    <div class="product">
            <div class="product">
                <img alt="Random photo" src="https://fastly.picsum.photos/id/1043/200/300.jpg?hmac=3l-zIM3sjEYfLwln1cOurui-983Bxq1zjEYt9HeScyQ">
                <h3>${productsData[i].name}</h3>
                <h4>NOK ${productsData[i].price}</h4>
                <span class="heart">
                    <svg fill="none" height="24" stroke="#000000" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>
`;
}

// 3. Check if any of the fav btns heart clicked
const favButtons = document.querySelectorAll("svg");
console.log(favButtons);

// loop on the dom elements

for (let x = 0; x < favourites.length; x++) {
    console.log(favourites);
    favourites[x].addEventListener("click", function () {
        console.log(favourites);

        console.log(this.classList);
        this.classlist.toggle("active-heart");
    })
}

// 4. I want to make this heart to be red. To do: my clicking Event, move my clicking event of the
