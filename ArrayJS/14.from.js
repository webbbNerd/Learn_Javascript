//* Array.from() static method creates a new, shallow-copied

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

var set = new Set(["foo", "bar", "baz", "foo"]);

console.log(set);
// Expected output: Set(3) { 'foo', 'bar', 'baz' }

console.log(Array.from(set));
// Expected output: Array [ 'foo', 'bar', 'baz' ]
