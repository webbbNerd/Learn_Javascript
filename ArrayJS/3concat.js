const num1 = [[1]];
const num2 = [2, [3]];
const letters = ["a", "b", "c"];

const concat = [1, 2, 3].concat(num1, num2, [[1, 2, 3], [2], letters]);

console.log(concat);
//[ 1, 2, 3, [ 1 ], 2, [ 3 ], [ 1, 2, 3 ], [ 2 ], [ 'a', 'b', 'c' ] ]

console.log(concat.flat());
// [ 1,   2, 3, 1, 2,   3,1,   2, 3, 2, 'a', 'b','c']
