
import { render, screen } from '@testing-library/react';
import App from '../App.js';

// Тест: Створення заголовка ToDoList

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
    

// Тест: Рендеринг основного компонента

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo List/i);
  expect(linkElement).toBeInTheDocument();
});