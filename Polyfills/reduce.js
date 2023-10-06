Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let arrNum = [2, 3, 4, 5];

let newArr = arrNum.myReduce((nums, i) => {
  return nums + i;
});

let newArr1 = arrNum.reduce((acc, cur) => {
  return acc + cur;
});
console.log(newArr);
console.log(newArr1);
