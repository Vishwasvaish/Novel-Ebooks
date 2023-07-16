import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  

  const addTodo = (e) => {

    if(!e.target.value) return;

    if (e.key === "Enter") {
      console.log(e.target.value);
      let obj = { text: e.target.value, completed: false };

      setTodoList([...todoList, obj]);
      console.log(todoList);
      e.target.value = "";
      toast.success("Task Added Successfully");
    }
  };

  const updateTodo = (index) => {
    console.log(index);

    let temp = todoList;
    temp[index].completed = !temp[index].completed;

    setTodoList([...temp]);
  }

  const deleteTodo = (index) => {
    console.log(index);

    let temp = todoList;
    temp.splice(index, 1);

    setTodoList([...temp]);
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">ToDo List</h1>

        <div className="card">
          <div className="card-header">
            <input type="text" className="form-control" onKeyDown={addTodo} />
          </div>
          <div className="card-body">
            {todoList.map((task, index) => {
              return (
                <div className="d-flex mb-3 todoItem">
                  <input type="checkbox" checked={task.completed} />&nbsp;&nbsp;&nbsp;
                  <h4 style={{ textDecoration : (task.completed ? 'line-through' : '') }} className={ task.completed ? "text-success" : "" }>{task.text}</h4>
                  <button className="btn btn-success ms-auto" onClick={() => { updateTodo(index) }} >Complete</button>
                  <button className="btn btn-danger ms-4" onClick={() => { deleteTodo(index) }} >Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
