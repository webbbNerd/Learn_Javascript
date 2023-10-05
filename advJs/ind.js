//? How to bind an event

class React {
  constructor() {
    this.username = "master";
    this.rollNo = 21;

    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("hello world");
    console.log(this);
  }
}

const app = new React();

// ---------------------------------------------------------------------------------------------

// ?some advanced topics

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const expression = document.getElementById("display").value;
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// ---------------------------------------------------------------------------------------------

var isAnagram = (s, t) => {
  if (s.length != t.length) return false;
  var charCount = {};

  for (var i = 0; i < s.length; i++) {
    console.log(charCount);
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    charCount[t[i]] = (charCount[t[i]] || 0) - 1;
  }

  for (var key in charCount) {
    if (charCount[key] !== 0) {
      return false;
    }
  }

  return true;
};

var s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));

// ---------------------------------------------------------------------------------------------

function arra(pattern, s) {
  var sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;
  const kMap = {};
  const vMap = {};

  for (var i = 0; i < pattern.length; i++) {
    const key = pattern[i];
    const value = sArr[i].toString();
    console.log(key, value);
    console.log(kMap, vMap);
    if (key in kMap || value in vMap) {
      if (kMap[key] !== value) return false;
      if (vMap[value] !== key) return false;
    } else {
      kMap[key] = value;
      vMap[value] = key;
    }
  }
  return true;
}

var pattern = "abba",
  s = "dog constructor constructor dog";
var val = arra(pattern, s);

console.log(val);

// ---------------------------------------------------------------------------------------------

var alp = [
  "a",
  "b",
  "c",
  "d",
  "w",
  "e",
  "s",
  "f",
  "a",
  "c",
  "s",
  "ac",
  "c",
  "a",
  "1",
  1,
  2,
  2,
  2,
];

var obj = {};
for (var i = 0; i < alp.length; i++) {
  obj[alp[i]] = (obj[alp[i]] || 0) + 1;
}
for (var key in obj) {
  if (obj[key] >= 2) {
    console.log(key);
  }
}

// ---------------------------------------------------------------------------------------------

hello();
hello1();
hello2();
hello3();

function hello() {
  console.log(1);
}
const hello1 = () => {
  console.log(2);
};
let hello2 = () => {
  console.log(3);
};
var hello3 = () => {
  console.log(4);
};

// ---------------------------------------------------------------------------------------------
// ?currying

function x(a) {
  var val = a;
  const y = (b) => {
    if (b == undefined) return val;
    val *= b;
    return x(val);
  };
  return y;
}
console.log(x(1)(2)(3)(4)());

// ---------------------------------------------------------------------------------------------
// ?currying

const currySum = (a) => {
  var initialSum = a;
  const addNextValue = (nextValue) => {
    if (nextValue == undefined) {
      return initialSum;
    }
    const newSum = initialSum + nextValue;
    return currySum(newSum);
  };
  return addNextValue;
};

console.log(currySum(1)(2)(3)(4)());

// ---------------------------------------------------------------------------------------------

console.log(this);

if (true) {
  var x = 10;
  let y = 10;
}

console.log(x);
console.log(y);
let y = 10;

console.log(typeof 1);
console.log(typeof "1");

if ("false" == 0) {
  console.log(x);
}

// ---------------------------------------------------------------------------------------------

var x = ["hello", "hello", "hello"];

var paragraphs = x.map((y, index) => {
  var para = document.createElement("p");
  para.setAttribute("id", "range" + index);
  para.innerText = y;
  document.body.appendChild(para);
});

x.forEach((y, index) => {
  var para = document.createElement("p");
  para.classList.add("animated-paragraph");
  para.innerText = y;
  document.body.appendChild(para);
});

// ---------------------------------------------------------------------------------------------
//? creating method

Array.prototype.positive = function () {
  return this.filter((x) => {
    return x > 0;
  });
};

console.log([-1, -2, 0, 1, 2].positive());

// ---------------------------------------------------------------------------------------------
//? object iteration

var obj = {
  name: "John",
  roll: 21,
};

for (var i in obj) {
  console.log(i, obj[i]);
}

for (var [i, j] of Object.entries(obj)) {
  console.log(i, obj[i], j);
}

// ---------------------------------------------------------------------------------------------

console.log(x); // reference error tdz
let x = 10;

// ---------------------------------------------------------------------------------------------
//? call, apply, bind

function callFunc(prop) {
  console.log(`Hello ${this.name} ${prop}`);
}

var obj = { name: "Utkarsh", class: "Master" };

// callFunc.call(obj, "Singh");
// callFunc.apply(obj, ["Singh", 10]);.
callFunc.bind(obj, "Singh")();

// function calls object with these methods and can access values inside object with extra ropsp

// ---------------------------------------------------------------------------------------------
//? obj prototype
const obj = {
  name: "demob",
  getName: () => {
    return this.name;
  },
  getRoll: () => {
    return this.roll;
  },
};

const obj2 = {
  roll: "play",
  __proto__: obj, // now obj is accessible inside obj2
};

console.log(obj2.getRoll()); // play

//? set : no key value pairs
// add(), has(), delete(), clear()

//? WeakSet
// can only store objects
// can't iterate through prototype

//? map : can save key values
// new Map()
// set(), delete(), clear(), get()

//? WeakMap
// can't iterate through it
// can only store objrcts

// ---------------------------------------------------------------------------------------------
