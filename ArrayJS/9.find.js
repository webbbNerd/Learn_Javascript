//* First element found is returned, If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 3, 5, 8, 12].find(isPrime)); // 3

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

console.log(inventory.find((fruit) => fruit.name === "cherries"));
// { name: 'cherries', quantity: 5 }

console.log(inventory.find(({ name }) => name == "apples"));
// { name: 'apples', quantity: 2 }
