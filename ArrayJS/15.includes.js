//*returns true or false

// includes(searchElement)
// includes(searchElement, fromIndex)

console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true
console.log(["1", "2", "3"].includes(3)); // false
console.log([0, 1, 2, NaN].includes(0)); // true

const arr = ["a", "b", "c"];

console.log(arr.includes("c", 2)); // true
console.log(arr.includes("c", 3)); // false
