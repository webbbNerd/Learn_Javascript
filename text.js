// function hello(arr, n){
//     var i;
//     for(i=0;i<n;i++){
//         var j;
//         for(j=i+1; j<n;j++){
//             if(arr[i]>arr[j]){
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// const arr = [4,1,3,9,7]
// hello(arr,5)

// var x = 20
// console.log(x)
// let x = 0

// ---------------------------------------------------------------------------------------------

for (var i = 0; i < 3; i++) {
  setTimeout(
    (
      (i) => () =>
        console.log(i)
    )(i),
    10
  );
}
// ---------------------------------------------------------------------------------------------

let num = [1, 2, 3];
num[6] = 6;
console.log(num);
//[ 1, 2, 3, <3 empty items>, 6 ]
// ---------------------------------------------------------------------------------------------

let num1 = [1, 2, 3];
num1[9] = num1;
console.log(num1);
//it will create a circular structure of arrays in which each time we will open a array it has the same array at the 9th position.
// ---------------------------------------------------------------------------------------------
console.log(!!null);
console.log(!!"");
console.log(!!1);
// true
// false
// true
// ---------------------------------------------------------------------------------------------
//setInterval return an Id when it starts
// ---------------------------------------------------------------------------------------------
console.log([..."hello"]);
//[ 'h', 'e', 'l', 'l', 'o' ]
// ---------------------------------------------------------------------------------------------

// setTimeout(res, 100, "two");
// res is the function you want to execute after a delay of 100 milliseconds.
// 100 is the delay in milliseconds.
// "two" is an additional argument that you want to pass to the res function when it's executed.
// So, when the setTimeout timer expires after 100 milliseconds, it will call the res function and pass "two" as an argument to it.
// ---------------------------------------------------------------------------------------------
let person = { name: "john" };
let arr = [person];
person = null;
console.log(person, arr); //? null [ { name: 'john' } ]
// because of different memory locations
// ---------------------------------------------------------------------------------------------
// because of same memory reference
let person1 = { name: "john" };
let arr1 = [person1];
arr[0].name = "name";
// person1 = null
console.log(person1, arr); //? { name: 'name' } [ { name: 'name' } ]

// ---------------------------------------------------------------------------------------------

const obj = {
  name: "john",
  age: "25",
};

for (let keys in obj) {
  console.log(keys);
}
// name
// age
for (let entries of Object.entries(obj)) {
  console.log(entries);
}
// [ 'name', 'john' ]
// [ 'age', '25' ]
for (let [keys, values] of Object.entries(obj)) {
  console.log(keys, values);
}
// name john
// age 25
// ---------------------------------------------------------------------------------------------

(() => {
  let x = (y = 10);
  z = 20;
})();
console.log(y, z, "1st");
// 10 20 1st
function hello() {
  let x = (y = 10);
  z = 20;
}
hello();
// console.log(
//   y,
//   z,
//   "2nd"
// )
// 10 20 2nd
// same for both

// ---------------------------------------------------------------------------------------------
// (() => {
//   var v = 10;
// })();
// console.log(v);
