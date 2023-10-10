let ele = document.querySelector("#tableBody")

var x = [{name:'max', age:20}, {name:'sam', age:21}]

x.map((val, index) => {
  var htmlData = `<tr><td>${val.name}</td><td>${val.age}</td></tr>`
  ele.insertAdjacentHTML("beforeend", htmlData)
})




//! with react js
import "./styles.css";

export default function App() {
  let x = [
    { name: "max", age: 20 },
    { name: "sam", age: 21 }
  ];
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {x.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
