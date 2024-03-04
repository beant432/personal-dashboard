import React, { useEffect, useState } from "react";
import TodoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "./index.scss";
import { TextConstant } from "../../utils/textConstant";

const Todo = () => {
  const [list, setList] = useState([]);

  //getting saved list from local storage
  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem("TasksList") || "[]");
    if (retriveData) setList(retriveData);
  }, []);

  //set list in local storage
  useEffect(() => {
    if (list?.length) {
      localStorage.setItem("TasksList", JSON.stringify(list));
    }
  }, [list]);

  //add task in list
  const addToDoTask = (task) => {
    const newElement = {
      id: Date.now(),
      name: task,
      taskCompleted: false,
    };
    setList([...list, newElement]);
  };

  //handle task completed checkbox
  const toggleCompleted = (id) => {
    setList(
      list?.map((task) => {
        if (task.id === id) {
          return { ...task, taskCompleted: !task.taskCompleted };
        } else {
          return task;
        }
      })
    );
  };

  //clear all list
  const clearAll = () => {
    setList([]);
    localStorage.clear();
  };

  //clear only completed tasks
  const clearCompleted = () => {
    setList(list?.filter((item) => !item.taskCompleted));
  };

  //delete any task
  const deleteTask = (id) => {
    setList(list?.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h4 className="todoHeader">{TextConstant.todolist}</h4>
      <div className="toDo-card">
        <ToDoForm addToDoTask={addToDoTask} />
        {list.length > 0 && (
          <TodoList
            list={list}
            handleToggle={toggleCompleted}
            clearAll={clearAll}
            deleteTask={deleteTask}
            clearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
