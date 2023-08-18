//*  instances returns a new array iterator object that contains the keys for each index in the array.

const array1 = ["a", "b", "c"];
const iterator = array1.keys();

// console.log(...iterator);
// 0 1 2

// OR

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
