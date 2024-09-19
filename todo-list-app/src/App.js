import React, { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList.js';
import ToDoForm from './components/ToDoForm/ToDoForm.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>ToDo List</h1>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
