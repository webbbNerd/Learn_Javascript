//* The repeat() method of String values constructs and returns a new string
//* which contains the specified number of copies of this string, concatenated together.
// repeat(count)
console.log("repeat -------------------------------------");

const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
// console.log("123".repeat(-1)); // RangeError
console.log("123_".repeat(0)); // ''
console.log("123_".repeat(1)); // '123_'
console.log("123_".repeat(2)); // '123_123_'
console.log("123_".repeat(3.5)); // '123_123_123_' (count will be converted to integer)
// console.log("123".repeat(1 / 0)); // RangeError

//* The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
console.log("replace -------------------------------------");
// replace(pattern, replacement)

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

console.log("replaceAll -------------------------------------");
console.log(p.replaceAll("dog", "monkey"));
// The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?
