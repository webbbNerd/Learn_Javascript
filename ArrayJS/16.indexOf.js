//* returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

const array = [2, 9, 9];
console.log(array.indexOf(2)); // 0
console.log(array.indexOf(7)); // -1
console.log(array.indexOf(9, 2)); // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0

// You cannot use indexOf() to search for NaN.

const arr = [NaN];
console.log(arr.indexOf(NaN)); // -1
