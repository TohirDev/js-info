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
// console.log(newOne);

Array.prototype.tohir = (arr) => {
  for (let i = 0; i < 4; i++) {
    return i;
  }
};

// console.log([1, 2, 3, 3].tohir());

const person = {};

person.talk = () => "Talking";

const me = person;

me.walk = () => "walking";

const you = me;

person.walk = () => "i am walking";

String.prototype.reverseName = function () {
  return this.split("").reverse().join("");
};

// console.log("tohir".__proto__);

const stringy = (n) => "10".repeat(Math.ceil(n / 2)).substring(0, n);

// console.log(stringy(5));

class Human {
  walk() {
    return "walking";
  }
}

function Dude(name) {
  this.name = name;
}

const tohir = new Dude("Tohir");

Dude.prototype.talk = () => {
  return "Talking";
};

// CONSTRUCTOR FUCNTION

function SuperEl(type, text) {
  this.el = document.createElement(type);
  this.el.innerText = text;
  this.el.addEventListener("click", () => console.log(this.el));
  document.body.append(this.el);
}
// console.log(new SuperEl('h1', 'who the fuck think you are'))

function Mankind(name) {
  this.talk = function () {
    return `hello i am ${name}`;
  };
  this.animal = function () {
    return `EYYY ${name} TURTLE`;
  };
}
const mbappe = new Mankind("mbappe");
// console.log(mbappe);

// FACTORY FUNCTION

const createPerson = (name) => {
  return {
    talk() {
      return `Hello, i am ${name}`;
    },
  };
};

const ronaldo = createPerson("ronaldo");

// console.log(ronaldo);

function Greeting(name) {
  this.name = name;
  this.talk = function () {
    return this;
  };

  // setTimeout(() => {
  //   console.log(this);
  // }, 100);
}

const greet = new Greeting("Tohir");

function talk(lang, isKind) {
  if (isKind) {
    if (lang === "en") {
      return `I am ${this.name}`;
    } else if (lang === "uz") {
      return `Men ${this.name}man`;
    }
  } else if (!isKind) {
    if (lang === "en") {
      return `${this.name}, WTF YOU WANT🤬`;
    } else if (lang === "uz") {
      return `${this.name}, NIMA XOLESAN😒`;
    }
  }
}

const talkName = {
  name: "Tohir",
};

let gym = { name: "tohir" };
let gymBro = gym;

gymBro.name = "Vohid";

gym = { name: "Qoli" };

const tohirObj = {
  1: {
    id: 1,
    name: "TOhir",
    age: 12,
  },
  2: {
    id: 2,
    name: "Vohid",
    age: 17,
  },
};

function deleteObj(id) {
  delete tohirObj[id];
  console.log(tohirObj);
}

document.body.innerHTML += `
    <div>
    <h1>${tohirObj[1].name}</h1>
    <h1>${tohirObj[1].age}</h1>
    <button onclick="deleteObj(${tohirObj[1].id})">Delete</button>
    <div>
    <div>
    <h1>${tohirObj[2].name}</h1>
    <h1>${tohirObj[2].age}</h1>
    <button onclick="deleteObj(${tohirObj[2].id})">Delete</button>
    <div>
`;

function htmlspecialchars(formData) {
  // Insert your code here
  return formData;
}

// console.log(htmlspecialchars("rodri is on fire"));
