import React, { useState } from "react";
import { TextConstant } from "../../utils/textConstant";

const ToDoForm = ({ addToDoTask }) => {
  const [task, setTask] = useState("");

  //set in list and clear input
  const handleAddClick = (e) => {
    e.preventDefault();
    addToDoTask(task);
    setTask("");
  };

  return (
    <form className="todoform" onSubmit={(e) => handleAddClick(e)}>
      <input
        type="text"
        placeholder="Add Task.."
        className="toDoInput"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addBtn">{TextConstant.addTask}</button>
    </form>
  );
};

export default ToDoForm;
