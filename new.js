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

console.log(factoryOne(newName));
