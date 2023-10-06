const bulbs = document.querySelectorAll(".bulb");
const uniqueBtn = document.querySelector("#uniquebtn");
const left = document.querySelector("#left");
const forward = document.querySelector("#forward");
const stop = document.querySelector("#stop");
let btn = document.querySelector("#btn")
let timer;
let colorIndex = 0;
let leftIndex = 0;
let arr = "1234567890abcdef"
let colorArr = ["#7634ac", "#aec231", "#cae342"];
let randomPos = ["20%", "25%", "30%"];

function start(){
  timer = setInterval(() => {
    let str = "#"
    for(let i =0;i<6;i++){
    let random = Math.floor(Math.random() * arr.length)
    str += arr.charAt(random)
    }
    let borderVal = Math.floor(Math.random() * 50)
    let leftVal = Math.floor(Math.random() * 100) + "%"
    bulbs.forEach((val, index) => {
      var ran = Math.floor(Math.random() * 3)
      val.style.backgroundColor = colorArr[ran];
      val.style.transition = "ease 1s"
      val.style.borderRadius = `${borderVal}%`
      val.style.left = randomPos[leftIndex]
      leftIndex = (leftIndex + 1) % randomPos.length;
    })
    randomPos.push(leftVal);
    if (randomPos.length > bulbs.length) {
      randomPos.shift();
    }
  }, 2000)
}
start()

btn.addEventListener("click", function(){
  start()
})

// btn.addEventListener("click", function(){
//   start()
// })

uniqueBtn.addEventListener("click", function(){
  forward.classList.remove("active")
  uniqueBtn.classList.add("active")
  clearInterval(timer)
    timer = null
  timer = setInterval(() => {
    let str = "#"
    for(let i =0;i<6;i++){
    let random = Math.floor(Math.random() * arr.length)
    str += arr.charAt(random)
    }
    bulbs.forEach((val, index) => {
      val.style.backgroundColor = str;
      val.style.transition = "ease 1s"
      val.style.borderRadius = "40px"
    })
  },1000)
})

forward.addEventListener("click", function(){
  forward.classList.add("active")
  uniqueBtn.classList.remove("active")
  clearInterval(timer)
    timer = null
  timer = setInterval(() => {
    let str = "#"
    for(let i =0;i<6;i++){
    let random = Math.floor(Math.random() * arr.length)
    str += arr.charAt(random)
    }
    bulbs.forEach((val, index) => {
      val.style.backgroundColor = colorArr[colorIndex];
      val.style.transition = "ease 1s"
      // val.style.borderRadius = "40px"
      colorIndex = (colorIndex + 1) % colorArr.length;
    })
    colorArr.unshift(str);
    if (colorArr.length > bulbs.length) {
      colorArr.pop();
    }
  },1000)
})
const stopAll = () => {
  forward.classList.remove("active")
  uniqueBtn.classList.remove("active")
}

stop.addEventListener("click", () => {
  stopAll()
  if(timer){
    bulbs.forEach((val)=> {
      val.style.backgroundColor="transparent"
      val.style.borderRadius = "50%"
    })
    clearInterval(timer)
    timer = null
    return;
  }
})
