// 1. Select the h2 heading
        // querySelector
        // querySelectorAll
        // getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select the h2 heading by class (.heading2)

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select ul by Id

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById

document.getElementById("list");
console.log("list");

// 5. Select the first element in list.

const listItem = document.querySelector("li");
console.log(listItem);

// 6. Select all the elements in list.

const listItems = document.querySelectorAll("li");
console.log(listItems);

// 7. Select h1 and change color to red.

    // first select, and check you selected it correct:
const heading1 = document.querySelector("h1");
console.log("🥰 This is the first heading: ",heading1);
console.dir(heading1); // same as above, but with more info.

    // give it styling:
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "lightGray";

// 8. Select the empty div in html and add the class .container.

const myDiv = document.querySelector("div");
console.dir(myDiv);
myDiv.classList.add("container");

// change the heading text

heading1.innerText = "Hei Thomas og Erica";

heading2.innerHTML = '<span class="green">Hei hei</span>';
                        // 0        1       2
const myArrayOfNames = ["hesh", "Kjetil", "Jonas"];

console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[2]);

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1

console.log(myArrayOfNames[1]);