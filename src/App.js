import { useState } from "react";
import Footer from "./components/ui/Footer.component";
import Header from "./components/ui/Header.component";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const clickHandler = () => {
    if (value === "") {
      alert("Please enter something");
      return;
    }
    // set list(value)
    const tempList = [...list];
    tempList.push(value);
    setList(tempList);
    setValue("");
  };

  const handleCleaerAll = () => {
    setList([]);
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* heading */}
        <h2>
          Todo App{" "}
          <button className="ml-6 btn-clear-all" onClick={handleCleaerAll}>
            Clear All
          </button>
        </h2>

        {/* create new todo */}
        <div className="create-section">
          <label>Todo</label>
          <input
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="button" onClick={clickHandler}>
            Save
          </button>
        </div>

        {/* show our todo list */}
        <div className="todo-list">
          {list.length > 0 ? (
            list.map((item, index) => (
              <div key={index} className="todo-item">
                {item}
              </div>
            ))
          ) : (
            <h1>No Todos</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
