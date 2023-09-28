//? lifecycle methods
//! https://www.youtube.com/watch?v=UbLYdbOPLe8&list=PL_HlKez9XCSNTiceK7OGVQD8dQk9R4CaN
class App extends Component {
  constructor() {
    // also a lifecycle method
    // constructor runs before componentDidMount
    super();
  }

  componentDidMount() {
    console.log("when component renders the very first time");
  }

  componentDidUpdate() {
    console.log("update like useEffect [dependency] with some dependency");
  }

  componentWillUnmount() {
    console.log("component will remove");
    // like useEffect return statement it will remove the component
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    //it's also a lifecycle method
    return (
      <>
        <h1>this.state.count</h1>
        {/* <button onClick={this.increment.bind(this)}>click me</button> */}{" "}
        //both buttons are same
        <button onClick={() => this.increment()}>click me</button>
      </>
    );
  }
}

//? useMemo // takes a dependency and make the feature run for only that dependecy when anything changes within a component
//* returns are memoised value
const isEven = useMemo(() => {
  console.log("hello I will only run for dependency");
}, [dependecy]);

//! https://www.youtube.com/watch?v=6RvadAuzS1E&list=PL_HlKez9XCSNTiceK7OGVQD8dQk9R4CaN&index=4
//? useCallback // stops a function from running again and again
//* returns a memoised function
const isodd = useCallback(() => {
  console.log("hello I will only run for dependency");
}, [dependecy]);

// Timer code

import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  let [min, setMin] = useState(59);
  var [sec, setSec] = useState(59);
  const [start, setStart] = useState(false);
  const timer = useRef();

  const startTimer = () => {
    console.log(timer, start);
    if (start) {
      console.log("hello");
      clearInterval(timer.current);
      setStart(false);
    } else {
      setStart(true);
      timer.current = setInterval(() => {
        setSec((prev) => {
          if (prev <= 0) {
            console.log("rann");
            setMin((prev) => prev - 1);
            return 59;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    setSec(59);
    setMin(59);
  };

  return (
    <div className="App">
      <input value={min} onChange={(e) => setMin(e.target.value)} />
      <input value={sec} onChange={(e) => setSec(e.target.value)} />
      <button onClick={startTimer}>{start ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
// anothertimer

import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  let [min, setMin] = useState(59);
  var [sec, setSec] = useState(59);
  const [start, setStart] = useState(false);
  const timer = useRef();
  const timerSet = () => {};
  useEffect(() => {
    let timer;
    if (start && !timer) {
      timer = setInterval(() => {
        if (sec == 0) {
          if (min == 0) {
            clearInterval(timer);
            setStart(false);
          } else {
            setMin((prev) => prev - 1);
            setSec(59);
          }
        } else {
          setSec((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start, sec, min]);

  return (
    <div className="App">
      <input value={min} onChange={(e) => setMin(e.target.value)} />
      <input value={sec} onChange={(e) => setSec(e.target.value)} />
      <button
        onClick={() => {
          setStart(!start);
        }}
      >
        {start ? "Stop" : "Start"}
      </button>
      {/* <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
}



// debouce customer hook

import { useDebounce } from "./hook";

const debounce = useDebounce(value);
useEffect(() => {
  console.log(input);
}, [debounce]);
