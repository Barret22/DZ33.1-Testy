import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from '../components/ToDoForm/ToDoForm.js';
import ToDoList from '../components/ToDoList/ToDoList.js';


// Тест: Додавання нового елемента в список після натискання на “Додати”

test('adds new task to the list', () => {
  render(<ToDoList />);
  const inputElement = screen.getByPlaceholderText('Add a new task');
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  
  fireEvent.click(screen.getByText('Add'));
  const newTask = screen.getByText('New Task');
  expect(newTask).toBeInTheDocument();
});
