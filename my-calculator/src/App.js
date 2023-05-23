import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && !waitingForSecondOperand) {
      calculate();
    }
    setFirstOperand(parseFloat(displayValue));
    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const calculate = () => {
    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <button className="function" onClick={() => handleClearClick()}>AC</button>
        <button className="function">+/-</button>
        <button className="function">%</button>
        <button className="operator" onClick={() => handleOperatorClick('/')}>÷</button>
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button className="operator" onClick={() => handleOperatorClick('*')}>×</button>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="zero" onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleDigitClick('.')}>.</button>
        <button className="operator" onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
};

export default App;
