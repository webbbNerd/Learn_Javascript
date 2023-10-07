// let num = 4;

// console.time();
// let sum = (num * (num + 1)) / 2;
// console.log(sum);
// console.timeEnd();

// console.time();
// let count = 0;
// for (let i = 1; i <= num; i++) {
//   count += i;
// }
// console.log(count);
// console.timeEnd();

// let a = 10,
//   b = "10";
// console.log(a + +b);

const clo = (x = 0) => {
  let count = x;

  const increament = () => {
    return ++count;
  };

  const decrement = () => {
    return --count;
  };

  return {
    increament,
    decrement,
  };
};

let coun = clo(10);
console.log(coun.increament());
console.log(coun.increament());
