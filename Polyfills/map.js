Array.prototype.myMap = function(cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr
};

let arrNum = [2,3,4,5]

let newArr = arrNum.myMap((nums, i, arr) => {
  return nums * 2
})


let newArr1 = arrNum.map((val) => {
  return val * 2
})
console.log(newArr)
console.log(newArr1)
