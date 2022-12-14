import { useState } from 'react';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const onChange = (setter) => {
  return (event) => {
    const { value } = event.target;
    setter(value ? parseFloat(value) : 0);
  }
};

export function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState('+');

  const applyAction = (fn, fnSign) => {
    return () => {
      setAction(() => fn);
      setSign(fnSign);
    };
  };

  return (
    <div className="calculator">
      <p>
        <button onClick={applyAction(add, '+')}>Add (+)</button>
        <button onClick={applyAction(subtract, '-')}>Subtract (-)</button>
        <button onClick={applyAction(multiply, '*')}>Multiply (*)</button>
        <button onClick={applyAction(divide, '/')}>Divide (/)</button>
      </p>
      <p>
        <input type="number" value={a} onChange={onChange(setA)} />
        <span> {sign} </span>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span> = {action ? action(a, b) : ''}</span>
      </p>
    </div>
  );
}