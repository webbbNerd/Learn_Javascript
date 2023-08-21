//*  The concat() method of String values concatenates the string arguments to this string and returns a new string.
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)
console.log("Concat -------------------------------------");

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"
const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!"   ?Take "" as string to initialize the concat

//* The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string,
//* returning true or false as appropriate.

console.log("includes -------------------------------------");

// includes(searchString)
// includes(searchString, position)

console.log("Blue Whale".includes("blue")); // returns false
console.log("Blue Whale".toLowerCase().includes("blue")); // returns true

const str = "To be, or not to be, that is the question.";
console.log(str.includes("To be", 0)); // true
console.log(str.includes("To be", 1)); // false

//* The match() method of String values retrieves the result of matching this string against a regular expression.
// match(regexp)
console.log("match -------------------------------------");
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
