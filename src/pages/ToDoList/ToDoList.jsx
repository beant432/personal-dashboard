import React from "react";
import ToDoElement from "./ToDoElement";
import "./index.scss";
import { TextConstant } from "../../utils/textConstant";

const TodoList = (props) => {
  const { list, handleToggle, clearAll, deleteTask, clearCompleted } = props;

  return (
    <div className="todolist-wrapper">
      <div className="toDoList-card">
        {list?.map((item) => (
          <ToDoElement
            data={item}
            key={item.id}
            name={item.name}
            deleteTask={deleteTask}
            handleToggle={handleToggle}
          />
        ))}
        <div>
          <button className="clearBtn" onClick={clearAll}>
            {TextConstant.clearAll}
          </button>
          {list.filter((item) => item.taskCompleted).length > 0 && (
            <button
              className="clearBtn clearCompleted "
              onClick={clearCompleted}
            >
              {TextConstant.clearCompleted}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
