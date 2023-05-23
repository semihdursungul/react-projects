import React from 'react';

const TodoItem = ({ item, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{item}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
