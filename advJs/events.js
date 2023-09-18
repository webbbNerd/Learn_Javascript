//? event bubbeling and (capturing -- you just have to write true)

{
  /* <body>
  <div>
    <button>Click Me</button>
  </div>
</body>; */
}

// var div = document.querySelectorAll("div");
// var button = document.querySelectorAll("button");

// div.addEventListener(
//   "click",
//   () => {
//     console.log("div");
//   },
//   true
// );

// stopImmediatePropagation is used when you have used multiple things
// on same button click or something like that so it stops the process in between

// button.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation(); // stops proposgation
//     console.log("button");
//   },
//   true
// );

//event capturing is when div prints and then button

//? currying real life example
var obj = {
  name: "rohn",
  age: "23",
};

function getUserInfo(obj) {
  return function (userToCall) {
    return obj[userToCall];
  };
}

let res = getUserInfo(obj)("name");

//? infinite currying

function cur(a) {
  return function (b) {
    if (b) {
      return cur(a + b);
    }
    return a;
  };
}

console.log(cur(1)(2)(3)(4)(5)());

//another method

function add(a) {
  return function (b) {
    if (b == undefined) return a;
    return add(a + b);
  };
}

// ===============================================================

//? memoisation

const func = (n) => {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

var callFun = () => {
  var cache = {};
  return (n) => {
    console.log("cahce", cache);
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("making");
      var sum = func(n);
      cache[n] = sum;
      console.log(sum);
      return sum;
    }
  };
};

console.time();
const memoisedVal = callFun();
console.log(memoisedVal(5));
console.timeEnd();

console.time();
console.log(memoisedVal(5));
console.timeEnd();

// ===============================================================

//? Debouncing

var inputCall = (val) => {
  console.log(val);
};

const debouncing = () => {
  var timer;
  return (input) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      inputCall(input);
    }, 1000);
  };
};

var call = debouncing();
// console.log(call("hello"));
// setTimeout(() => {
//   console.log(call("hello1"));
// }, 50);

// =======================================================

//? throttling

function throttle() {
  var timer = 0;
  return (val) => {
    if (!timer) {
      timer = setTimeout(() => {
        console.log(val);
        timer = 0;
      }, 1000);
    }
  };
}

var callthr = throttle();
// console.log(callthr("helloooothrottle"));
// console.log(callthr("hello1throttle111"));

// setTimeout(() => {
//   console.log(callthr("hello1throttle111"));
// }, 1000);

// =======================================================

//! cors error  https://www.youtube.com/watch?v=yMVpolHRMPk&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im&index=16
// pre flight request -- origin, method-- post, get etc only for different origins
// access control allow origin
// access control allow method

// =======================================================
//? Higher order function

let funct = (val) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(val);
    }, 2000);
  });
};

let highFunc = (fn) => async (req, res, next) => {
  try {
    const val = await fn("tru");
    console.log(val);
  } catch (err) {
    console.log(err, "error");
  }
};

highFunc(funct)();

// =======================================================

