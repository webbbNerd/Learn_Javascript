//* returns the index of the first element, If no elements satisfy -1 is returned.

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, , 5, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
console.log([4, 6, "", 7, , 5, 9, 12].findIndex((x) => x === undefined)); // 4
