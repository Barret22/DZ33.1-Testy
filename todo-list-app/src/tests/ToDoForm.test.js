import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from '../components/ToDoForm/ToDoForm.js';


// Тест: Введення тексту в поле (як цифри, так і букви)

test('input accepts both text and numbers', () => {
  render(<ToDoForm addTodo={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Add a new task');

  fireEvent.change(inputElement, { target: { value: 'Test123' } });
  expect(inputElement.value).toBe('Test123');
});


// Тест: Перевірка на помилку при натисканні на кнопку “Додати” без тексту

test('shows error when adding task without text', () => {
  render(<ToDoForm addTodo={() => {}} />);
  const buttonElement = screen.getByText('Add');
  
  fireEvent.click(buttonElement);
  const errorElement = screen.getByText('Task cannot be empty');
  expect(errorElement).toBeInTheDocument();
});
