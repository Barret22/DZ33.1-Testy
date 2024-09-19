import React, { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ToDoForm;
