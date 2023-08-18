//* returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
//* It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()),
//* but slightly more efficient than calling those two methods separately.

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
