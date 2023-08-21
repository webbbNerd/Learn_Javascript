//* The search() method of String values executes a search for a match between a regular expression and this string,
//* returning the index of the first match in the string.

console.log("search -------------------------------------");
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."

//* The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
console.log("slice -------------------------------------");
// slice(indexStart)
// slice(indexStart, indexEnd)

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

//*
console.log("split -------------------------------------");
// split(separator)
// split(separator, limit)

const strng = "The quick brown fox jumps over the lazy dog.";

const words = strng.split(" ");
console.log(words, words[3]);
// Expected output: [
//   'The',   'quick',
//   'brown', 'fox',
//   'jumps', 'over',
//   'the',   'lazy',
//   'dog.'
// ] fox

const chars = strng.split("");
console.log(chars, chars[8]);
// Expected output: "[
//   'T', 'h', 'e', ' ', 'q', 'u', 'i',
//   'c', 'k', ' ', 'b', 'r', 'o', 'w',
//   'n', ' ', 'f', 'o', 'x', ' ', 'j',
//   'u', 'm', 'p', 's', ' ', 'o', 'v',
//   'e', 'r', ' ', 't', 'h', 'e', ' ',
//   'l', 'a', 'z', 'y', ' ', 'd', 'o',
//   'g', '.'
// ] k"

const strngCopy = strng.split();
console.log(strngCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
