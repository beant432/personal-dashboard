import React from "react";
import { FaTrash } from "react-icons/fa";
import { TextConstant } from "../../utils/textConstant";

const ToDoElement = (props) => {
  const { data, handleToggle, deleteTask } = props || {};
  if (!data) return null;

  return (
    <div className="todoelement-Wrapper" id={data.id}>
      <div className="toDoTaskName">{data.name} </div>
      <div className="todoCompletedCheckbox">
        <label htmlFor="isCompleted" className="toDoInput checkboxtext">
          {TextConstant.completed}
        </label>
        <input
          id="isCompleted"
          name="is Completed"
          type="checkbox"
          value="false"
          checked={data.taskCompleted}
          onChange={() => handleToggle(data.id)}
          className="toDoInput"
        ></input>
      </div>
      <div>
        <FaTrash
          className="deleteIcon"
          size={20}
          onClick={() => deleteTask(data.id)}
        />
      </div>
    </div>
  );
};

export default ToDoElement;
