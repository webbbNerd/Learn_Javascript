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

//
