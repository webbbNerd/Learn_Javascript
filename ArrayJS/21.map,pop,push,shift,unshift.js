//* map
// instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(callbackFn)
// map(callbackFn, thisArg)
// 1st
const mappedArray = [1, 4, 9, 16];

// Pass a function to map
const map1 = mappedArray.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//2nd
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

// ====================================================================================================

//* pop -- removes the last element from an array and returns that element.

const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'


// ====================================================================================================

//* adds the specified elements to the end of an array and returns the new length of the array.

// push()
// push(element0, element1, /* …, */ elementN)

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']


// ====================================================================================================

//* removes the first element from an array and returns that removed element.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


// ====================================================================================================

//* adds the specified elements to the beginning of an array and returns the new length of the array.

// unshift()
// unshift(element0, element1, /* …, */ elementN)

let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]

// ====================================================================================================
