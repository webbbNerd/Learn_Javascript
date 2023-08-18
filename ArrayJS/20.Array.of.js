//* he Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []

console.log(Array.of(7)); // [7]
console.log(Array(7).fill(0)); // array of 7 empty slots

console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array(1, 2, 3)); // [1, 2, 3]

console.log(Array(3)); // Creates an array with length 3, not [3]
console.log(Array(1, 2, 3)); // [1, 2, 3]

console.log(new Array([3])); // [ [ 3 ] ]
console.log(new Array(2)); // [ <2 empty items> ]
console.log(new Array([2, 3])); // [ [ 2, 3 ] ]
