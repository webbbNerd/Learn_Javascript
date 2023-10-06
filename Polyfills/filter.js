Array.prototype.myFilter = function(cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)){
      arr.push(this[i])
    }
  }
  return arr
};

let arrNum = [2,3,4,5]

let newArr = arrNum.myFilter((nums, i, arr) => {
  return nums > 3
})


let newArr1 = arrNum.filter((val) => {
  return val > 3
})
console.log(newArr)
console.log(newArr1)
