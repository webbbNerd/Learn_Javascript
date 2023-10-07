const obj = {
  name: "john",
  getName() {
    age: 25;
    console.log(this.name, this.age); //john undefined
  },
  getname: {
    age: 25,
    getDetail() {
      console.log(this.name, this.age); //undefined 25
    },
  },
};

obj.getName();
obj.getname.getDetail();

//? Arrow
const objArr = {
  name: "john",
  getName() {
    age: 25;
    (() => {
      console.log(this.name, this.age); //john undefined
    })();
  },
};

objArr.getName();
// this will point to the lexical score or a scope above

class User {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name); //JohnClass
  }
}

const data = new User("JohnClass");
console.log(data); //User { name: 'JohnClass' }
console.log(data.getName());

//
// let calculator = {
//   read() {
//     this.a = +prompt("a", 0);
//     this.b = +prompt("b", 0);
//   },
//   sum() {
//     console.log(this.a + this.b);
//   },
//   mul() {
//     console.log(this.a * this.b);
//   },
// };

// calculator.read();
// calculator.sum();
// calculator.mul();

// getting this value

var length = 4;

function callback() {
  console.log(this.length); //4
}

const objlen = {
  length: 5,
  getLen(fn) {
    fn();
  },
};

objlen.getLen(callback);

//? but if

var length = 4;

function callback() {
  console.log(this.length); //3
}

const objLen = {
  length: 5,
  getLen() {
    arguments[0]();
  },
};

objLen.getLen(callback, 1, 2); //? why 3 because it will then inherit the value of length from the argumets scope in which the length will be the length of number of arguments

//* infinite calling

const calc = {
  total: 0,
  sum(a){
    this.total += a
    return this
  },
  sub(a){
    this.total -= a
    return this
  },
  mul(a){
    this.total *= a
    return this
  }
}

let calculate = calc.sum(10).mul(10).sub(10).sum(10)
console.log(calculate.total) // 100
