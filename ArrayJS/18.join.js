// instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
// If the array has only one item, then that item will be returned without using the separator.

// join()
// join(separator)


// null or undefined are ignored
const elements = ["Fire", "Air", undefined, "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
