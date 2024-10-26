import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState();
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();

  const handleInput = (e) => {
    if (e.target.id === 'input1') {
      setFirstInput(e.target.value);
    } else setSecondInput(e.target.value);
  }

  const handleAddition = () => {
    console.log(firstInput, secondInput);
    const addition = Number(firstInput) + Number(secondInput);
    setResult(addition);
  }

  const handleSubstraction = () => {
    setResult(firstInput - secondInput);
  }

  const handleMultiplication = () => {
    setResult(firstInput * secondInput)
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='container'>
        <div className='input-container'>
          <input
            id='input1'
            data-testid="input1"
            placeholder='add number...'
            onChange={(e) => handleInput(e)}
            value={firstInput}
          />
          <input
            id='input2'
            data-testid="input2"
            placeholder='add number...'
            onChange={(e) => handleInput(e)}
            value={secondInput}
          />
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

export default App;
