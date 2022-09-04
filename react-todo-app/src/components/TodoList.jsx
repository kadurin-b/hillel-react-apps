import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((resp) => resp.json())
      .then((data) => setTodos(data));
  }, []);

  function onInputChange(e) {
    setTitle(e.target.value);
  }

  function onSubmitButtonClick(e) {
    e.preventDefault();
    const newItem = {
      title,
      completed: false,
    };

    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => setTodos([...todos, data]));
  }

  function onItemClick(id) {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-type": "aplication.json" },
      body: JSON.stringify(newItem),
    });
    setTodos(todos.map((item) => (item.id === id ? newItem : item)));
  }

  function onDeleteButtonClick(id) {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "DELETE",
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <>
      <form className="add-todo-form" action="">
        <h3>New Task</h3>
        <input type="text" value={title} onChange={onInputChange} />
        <button className="add-btn" onClick={onSubmitButtonClick}>Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onDeleteButtonClick={onDeleteButtonClick}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </>
  );
}
