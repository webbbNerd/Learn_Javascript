//* To populate an empty array
// Syntax

// fill(value)
// fill(value, start)
// fill(value, start, end)

console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({});
console.log(arr); // [{}, {}, {}]

arr[0].hi = "hi";

console.log(arr); // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

//* Array Matrix

const arr1 = new Array(3);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
console.log(arr1); // [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
