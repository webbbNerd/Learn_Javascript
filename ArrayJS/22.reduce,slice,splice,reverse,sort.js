//* Reduce
console.log("Reduce -------------------------------------");

// The first time that the callback is run there is no "return value of the previous calculation".
//  If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value
//1st
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

//2nd
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

console.log(sum); // 6

//* reduceRight
// reduceRight(callbackFn, initialValue)

// It's opposite of reduce and the first index starts executing from the right side

// ====================================================================================================
//* Return a shallow copy of array
console.log("slice -------------------------------------");

// slice()
// slice(start)
// slice(start, end)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ====================================================================================================
//* splice()
console.log("splice -------------------------------------");
//return nothing, instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

// deleteCount -- 1 to delete element and replace and 0 from sliding the element to right and adding the new element at it's place

const months = ["Jan", "March", "April", "June"];
const x = months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(x, months);
// Expected output: Array [] Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// ====================================================================================================
//* reverse
console.log("reverse -------------------------------------");

// The reverse() method of Array instances reverses the original array

const array2 = ["one", "two", "three"];
console.log("array2:", array2);
// Expected output: "array2:" Array ["one", "two", "three"]

const reversed = array2.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array2:", array2);
// Expected output: "array2:" Array ["three", "two", "one"]

// ====================================================================================================
//* sort()
console.log("sort -------------------------------------");
// The sort() method of Array instances sorts the original array

// sort()
// sort(compareFn)

// 1st
const month = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array3 = [1, 30, 4, 21, 100000];
array3.sort();
console.log(array3);
//? sort number on the basis of first number
// Expected output: Array [1, 100000, 21, 30, 4]

// 2nd

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const numericArray = numericStringArray.map((str) => parseInt(str));

console.log(numericArray); // [80, 9, 700]

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

console.log(numberArray.sort()); // [1, 200, 40, 5]
console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]

console.log(numericStringArray.join()); // '80,9,700'
console.log(numericStringArray.sort()); // ['700', '80', '9']
console.log(numericStringArray.sort(compareNumbers)); // ['9', '80', '700']

console.log(mixedNumericArray.sort()); // [1, 200, 40, 5, '700', '80', '9']
console.log(mixedNumericArray.sort(compareNumbers)); // [1, 5, '9', 40, '80', 200, '700']


// ====================================================================================================
