function palindrome(x) {
  return x.toString().split("").reverse();
}

const usdcny = (usd) =>
  usd % 2 === 0 ? `${6.75 * usd}.00` : `${6.75 * usd}`;

let person = {
  name: "tohir",
  age: 22,
  hobies: ["hiking", "reading"],
};
let newPerson = person;

let hobbies = newPerson.hobies;

person.hobies = "nike";

// console.log(hobbies);
// let a = "tohirMaaan";

function first() {
  console.log(a);
}

function second() {
  console.log("second");
}

function third() {}
console.log("third");

// first();

// second();

// third();

// console.log(palindrome(122));
// console.log(usdcny(465));

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

// console.log(combine(objA, objB));

function returThisObj() {
  return this;
}

const newName = {
  name: "tohir",
};

function factoryOne(name) {
  return (name = this.name);
}
const CARD = document.getElementById("container");
const CART_BUTTON = document.getElementById("cart_button");
const CROSS = document.getElementById("cross");
const COUNT = document.getElementById("count");
const CART = document.querySelector(".cart");

let cart_store = [];
// console.log(factoryOne(newName));
function addProduct(value) {
  console.log(value);
}
fetch("https://dummyjson.com/products", {
  method: "GET",
})
  .then((javob) => {
    if (javob.ok) {
      return javob.json();
    }
  })
  .then((data) => {
    data.products.forEach((value) => {
      let card = `
        <div class='card'>
        <img src="${value.thumbnail}" class="img" />
        <h1>${value.title}</h1>
        <p>${value.description}</p>
        <button class="button">Add to Cart</button>
        <div>
        `;
      CARD.innerHTML += card;
    });
    let button = document.querySelectorAll(".button");
    button.forEach((e, i) => {
      e.addEventListener("click", function () {
        cart_store.push(data.products[i]);
        console.log(Object.values(data.products[i]));
        console.log(cart_store);
        COUNT.innerText = cart_store.length;
      });
    });
  });

CART_BUTTON.addEventListener("click", function () {
  CART.classList.add("hide");
});

CROSS.addEventListener("click", function () {
  CART.classList.remove("hide");
  console.log("hh");
});

if (cart_store.length >= 1) {
}
