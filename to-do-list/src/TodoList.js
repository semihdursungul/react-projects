import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a new item"
        className="input-field"
      />
      <button onClick={handleAddItem} className="add-button">Add</button>

      <div className="items-container">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onDelete={() => handleDeleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
