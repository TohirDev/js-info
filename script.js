function argumentsLength() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args.length;
}
function reduce(nums, fn, init) {
  for (var i = 0; i < nums.length; i++) {
    console.log(init + nums[i]);
  }
  return 1;
}
// reduce([1, 2, 3, 4], () => 1, 0);
// var a = { a: 1, b: 2 };
// var b = { c: 3, d: 4 };
// var d = { f: 3, e: 4 };
// console.log(Object.assign(a, b, d));

function makeFunc() {
  const name = "Tohir";
  function displayName() {
    console.log(name);
  }
  return displayName();
}

// const myFunc = makeFunc();

// myFunc();

// makeFunc();

let user = {
  name: "tohir",
  age: 19,
};
let clone = Object.assign({}, user);

clone.name = "Vohid";

// console.log(user);
// console.log(clone);

const obj = {
  name: "Tohir",
  age: 19,
};

// for ([k, v] of Object.entries(obj)) {
//   console.log(k, v);
// }

function Zombie(name) {
  this.name = name;
  this.message = () => `I eat you ${name}`;
}

const zombieObj = new Zombie("Tohir");
// console.log(zombieObj);

const userData = [
  {
    name: "tohir",
    salary: "1000$",
    hours: "40hs",
  },
  {
    name: "vohir",
    salary: "1200$",
    hours: "40hs",
  },
];

const obsN = {
  name: "tohir",
  salary: "1000$",
  hours: "40hs",
};

const { name: Tohir } = obsN;
// console.log(Tohir);

const a = { name: "TOhir" };
const b = Object.assign({}, a);
b.name = "vohid";
// console.log(a.name, b.name);

const tohirData = {
  name: "tohir",
  age: 19,
};

const cloneObj = {};

for (k in tohirData) {
  cloneObj[k] = tohirData[k];
}
cloneObj.name = "vohid";
cloneObj.age = 16;
// console.log(cloneObj);

const newClone = structuredClone(tohirData);

// console.log(newClone);

const tohirClone = { ...tohirData };

// console.log(tohirClone === tohirData);

const eObj = Object.create({});

// console.log(eObj);

delete tohirData.age;

// console.log(tohirData);

const addTwoPromises = async (promise1, promise2) => {
  return Promise.resolve(promise1 + promise2);
};

function compose(functions) {
  return function (x) {
    if (!functions.length) return x;
    for (let i = functions.length - 1; i >= 0; i--) x = functions[i];
    return x;
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4));

function addLength(str) {
  let arr = str.split(" ");
  const res = arr.map((word) => `${word} ${word.length}`);
  return res;
}

// console.log(addLength("you will win"));

function objConst(name) {
  this.name = name;
}

const newOne = new objConst("tohir");
console.log(newOne);
