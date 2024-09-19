import React, { useState } from 'react';

function ToDoList({ todos, completeTodo, removeTodo, editTodo }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEditSubmit = (e, index) => {
    e.preventDefault();
    editTodo(index, newText);
    setEditingIndex(null);
    setNewText('');
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
          {editingIndex === index ? (
            <form onSubmit={(e) => handleEditSubmit(e, index)}>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button type="submit">Сохранить</button>
            </form>
          ) : (
            <>
              <span onClick={() => completeTodo(index)}>{todo.text}</span>
              <button onClick={() => removeTodo(index)}>Удалить</button>
              <button onClick={() => { setEditingIndex(index); setNewText(todo.text); }}>Редактировать</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
