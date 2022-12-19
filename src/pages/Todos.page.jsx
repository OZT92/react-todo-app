import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { TextField, Alert } from "@mui/material";

const TodosPage = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const clickHandler = () => {
    if (value === "") {
      // alert("Please enter something");
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    // set list(value)
    const tempList = [...list];
    tempList.push(value);
    setList(tempList);
    setValue("");
  };

  const handleClearAll = () => {
    setList([]);
  };
  return (
    <>
      {/* heading */}
      <h2>
        Todo App{" "}
        <IconButton aria-label="delete" color="error" onClick={handleClearAll}>
          <DeleteIcon />
        </IconButton>
      </h2>

      {showAlert && <Alert severity="error">Please enter a task!</Alert>}

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
    </>
  );
};

export default TodosPage;
