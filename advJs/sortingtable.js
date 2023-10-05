import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState({ name: "", email: "" });
  const [list, setList] = useState([]);
  const formSubmit = () => {
    setList((prev) => [...prev, data]);
  };
  console.log(list, "liest");
  return (
    <div className="App">
      <input
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="name"
      />
      <input
        onChange={(e) =>
          setData((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="email"
      />
      <button onClick={formSubmit}>Submit</button>
      <table>
        <th>name</th>
        <th>email</th>
        {list
          .sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          })
          .map((val) => {
            return (
              <>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
}
