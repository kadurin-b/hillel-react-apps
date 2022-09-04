import React from "react";

export default function TodoItem({ onItemClick, onDeleteButtonClick, item }) {
  const { completed, title, id } = item;

  return (
    <li className="todo-item" onClick={() => onItemClick(id)} style={{backgroundColor: isCompleted(completed)}}>
      <span>{title}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteButtonClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

function isCompleted(completed) {
  return completed ? "green" : "#1f212c"
}
