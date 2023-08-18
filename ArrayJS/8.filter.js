//* creates a shallow copy of a portion of a given array,

//syntax
// filter(callbackFn)
// filter(callbackFn, thisArg)

// It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

const filtered = [12, 5, 8, 130, 44].filter((value) => value >= 10);
console.log(filtered); // filtered is [12, 130, 44]

const prime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].filter(
  (value) => {
    for (var i = 2; i < value; i++) {
      if (value % i == 0) {
        return false;
      }
    }
    return value > 1;
  }
);

console.log(prime);

// const prime1 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// for (var i = 2; i < prime1.length; i++) {
//   var isPrime2 = true;
//   for (var j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime2 = false;
//       break;
//     }
//   }
//   if (isPrime2) {
//     console.log(i);
//   }
// }


const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
