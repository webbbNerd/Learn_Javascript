(() => {
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");

  let start = document.querySelector(".start");
  let stop = document.querySelector(".stop");
  let reset = document.querySelector(".reset");

  let countdownTimer;

  start.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
    start.style.display = "none";
    stop.style.display = "initial";
    countdownTimer = setInterval(() => {
      startTimer();
    }, 1000);
  });

  stop.addEventListener("click", function () {
    stopInterval("pause");
  });
  const stopInterval = (state) => {
    start.innerHTML = state === "pause" ? "Continue" : "Start";
    start.style.display = "initial";
    stop.style.display = "none";
    clearInterval(countdownTimer);
  };
  const startTimer = () => {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 59;
    }
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 59;
      sec.value = 59;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    } else {
      return;
    }
  };

  reset.addEventListener("click", function () {
    hour.value = "";
    min.value = "";
    sec.value = "";
    stopInterval();
  });
})();

//! With React js
// import "./styles.css";
// import { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [time, setTime] = useState({ hour: "", min: "", sec: "" });
//   const [start, setStart] = useState(0);
//   let countDownTimer = useRef(null);
//   useEffect(() => {
//     // let countDownTimer;
//     if (start && !countDownTimer.current) {
//       if (time.sec > 59) {
//         setTime((prev) => ({ ...prev, min: prev.min + 1, sec: prev.sec - 59 }));
//       }
//       if (time.min > 59) {
//         setTime((prev) => ({
//           ...prev,
//           hour: prev.hour + 1,
//           min: prev.min - 59
//         }));
//       }
//       countDownTimer.current = setInterval(() => {
//         if (time.hour == 0 && time.min == 0 && time.sec == 0) {
//           setTime({ hour: "", min: "", sec: "" });
//           clearInterval(countDownTimer.current);
//           countDownTimer.current = null;
//           setStart(0);
//         } else if (time.sec != 0) {
//           setTime((prev) => ({
//             ...prev,
//             sec: prev.sec <= 10 ? `0${prev.sec - 1}` : "" + prev.sec - 1
//           }));
//         } else if (time.min != 0 && time.sec == 0) {
//           setTime((prev) => ({
//             ...prev,
//             sec: 59,
//             min: prev.min <= 10 ? `0${prev.min - 1}` : "" + prev.min - 1
//           }));
//         } else if (time.hour != 0 && time.min == 0) {
//           setTime((prev) => ({
//             ...prev,
//             min: 59,
//             sec: 59,
//             hour: prev.hour <= 10 ? `0${prev.hour - 1}` : "" + prev.hour - 1
//           }));
//         }
//         return;
//       }, 1000);
//     } else {
//       setStart(0);
//       clearInterval(countDownTimer.current);
//       countDownTimer.current = null;
//     }
//     return () => {
//       clearInterval(countDownTimer.current);
//       countDownTimer.current = null;
//     };
//   }, [start, time]);

//   const startTimer = () => {
//     if (time.hour == "" && time.min == "" && time.sec == "") return;
//     start ? setStart(0) : setStart(1);
//   };
//   const resetTimer = () => {
//     setTime({ hour: "", min: "", sec: "" });
//   };

//   return (
//     <div className="container">
//       <p className="container__heading">Countdown Timer</p>
//       <div className="container__labels">
//         <p className="hourName">Hours</p>
//         <p className="minName">min</p>
//         <p className="secName">Sec</p>
//       </div>
//       <div className="container__inputs">
//         <input
//           type="number"
//           onChange={(e) => {
//             if (e.target.value.length <= 2) {
//               setTime((prev) => ({ ...prev, hour: e.target.value }));
//             }
//           }}
//           value={time.hour}
//           maxlength="2"
//           placeholder="00"
//           className="container__inputs--time hour"
//         />
//         <p className="colon">:</p>
//         <input
//           type="number"
//           value={time.min}
//           onChange={(e) => {
//             if (e.target.value.length <= 2) {
//               setTime((prev) => ({ ...prev, min: e.target.value }));
//             }
//           }}
//           maxlength="2"
//           placeholder="00"
//           className="container__inputs--time min"
//         />
//         <p className="colon">:</p>
//         <input
//           type="number"
//           value={time.sec}
//           onChange={(e) => {
//             if (e.target.value.length <= 2) {
//               setTime((prev) => ({ ...prev, sec: e.target.value }));
//             }
//           }}
//           maxlength="2"
//           placeholder="00"
//           className="container__inputs--time sec"
//         />
//       </div>
//       <div className="container__buttons">
//         <button onClick={startTimer} className="container__btn start">
//           {!start ? "Start" : "Stop"}
//         </button>

//         <button onClick={resetTimer} className="container__btn reset">
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }
