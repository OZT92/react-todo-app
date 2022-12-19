import { useState } from "react";
import Footer from "./components/ui/Footer.component";
import Header from "./components/ui/Header.component";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";

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
          <IconButton
            aria-label="delete"
            color="error"
            onClick={handleCleaerAll}
          >
            <DeleteIcon />
          </IconButton>
        </h2>

        {/* create new todo */}
        <div className="create-section">
          <TextField
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="To-Do"
            variant="outlined"
          />
          <IconButton aria-label="save" color="primary" onClick={clickHandler}>
            <SaveIcon />
          </IconButton>
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
