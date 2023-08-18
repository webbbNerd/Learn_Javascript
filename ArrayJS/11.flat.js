//* creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. returns a shallow copy
// flat()
// flat(depth) //Defaults to 1.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

const arr3 = [1, { 2: [2] }, [3, 4, [5, { 6: [6] }]]];
console.log(arr3.flat(5));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
