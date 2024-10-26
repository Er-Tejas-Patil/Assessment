import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState();
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [operator, setOperator] = useState('');

  const handleInput = (e) => {
    if (e.target.id === 'input1') {
      setFirstInput(e.target.value);
    } else setSecondInput(e.target.value);
  }

  const validate = (num1, num2) => {
    console.log(firstInput)
    if (!num1 || !num2) {
      window.alert('Please enter input1 and input2 to perform calculations');
    }
  }

  const handleAddition = () => {
    validate(firstInput, secondInput);
    console.log(firstInput, secondInput);
    const addition = Number(firstInput) + Number(secondInput);
    setResult(addition);
    setOperator('+');
  }

  const handleSubstraction = () => {
    validate(firstInput, secondInput);
    setResult(firstInput - secondInput);
    setOperator('-');
  }

  const handleMultiplication = () => {
    validate(firstInput, secondInput);
    setResult(firstInput * secondInput)
    setOperator('*');
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='container'>
        <div className='input-container'>
          <input
            type='number'
            id='input1'
            data-testid="input1"
            placeholder='add number...'
            onChange={(e) => handleInput(e)}
            value={firstInput}
          />
          <span className='operator'>{operator}</span>
          <input
            type='number'
            id='input2'
            data-testid="input2"
            placeholder='add number...'
            onChange={(e) => handleInput(e)}
            value={secondInput}
          />
          <span className='operator'>=</span>
          <input
            id='result'
            data-testid="result"
            placeholder='result...'
            value={result}
          />
        </div>
        <div>
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubstraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;