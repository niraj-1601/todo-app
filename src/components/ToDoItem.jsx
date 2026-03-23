import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              editTodo(todo.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          {/* Tick Button */}
          <button
            className="tick-btn"
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.completed ? "✔️" : "⭕"}
          </button>

          {/* Task Text */}
          <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
          >
            {todo.text}
          </span>

          {/* Actions */}
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;