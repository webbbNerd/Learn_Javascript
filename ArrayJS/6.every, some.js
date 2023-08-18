//* every
// instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isBelowThreshold = (currentelement, index, array) => currentelement > 10;

console.log([12, 5, 8, 130, 44].every(isBelowThreshold)); // false
console.log([12, 54, 18, 130, 44].every(isBelowThreshold)); // true

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true


//* some
// at least one element in the array passes the test implemented by the provided function.  It returns a Boolean value.
// some(callbackFn)
// some(callbackFn, thisArg)

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
