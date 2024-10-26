import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator functionalities', () => {
  test('Addition of two numbers', () => {
    render(<App />);
    
    const input1 = screen.getByTestId('input1');
    const input2 = screen.getByTestId('input2');
    const addButton = screen.getByText('+');
    const result = screen.getByTestId('result');

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(addButton);

    expect(result.value).toBe('8');
  });

  test('Subtraction of two numbers', () => {
    render(<App />);
    
    const input1 = screen.getByTestId('input1');
    const input2 = screen.getByTestId('input2');
    const subtractButton = screen.getByText('-');
    const result = screen.getByTestId('result');

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(subtractButton);

    expect(result.value).toBe('2');
  });

  test('Multiplication of two numbers', () => {
    render(<App />);
    
    const input1 = screen.getByTestId('input1');
    const input2 = screen.getByTestId('input2');
    const multiplyButton = screen.getByText('*');
    const result = screen.getByTestId('result');

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(multiplyButton);

    expect(result.value).toBe('15');
  });
});
