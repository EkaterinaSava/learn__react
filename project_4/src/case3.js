import { useState } from 'react';

export function useCounter(initialValue = 0, delta = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevValue => prevValue + delta);
  }

  const decrement = () => {
    setCount(prevValue => prevValue - delta);
  }

  return [count, increment, decrement];
}

function YearCounter({ initialValue }) {
  const [count, inc, dec] = useCounter(initialValue, 1);

  return (
    <div className="year-counter">
      <p>Year:</p>
      <div>
        <button onClick={dec}>{'<<'}</button>
        <span style={{ margin: 5 }}>{count}</span>
        <button onClick={inc}>{'>>'}</button>
      </div>
    </div>
  )
}

function DecadesCounter({ initialValue }) {
  const [count, inc] = useCounter(initialValue, 10);

  return (
    <div className="decade-counter">
      <p>Decade: <button onClick={inc}>{count}'s</button></p>
    </div>
  )
}

export function ExampleCounters() {
  return (
    <div>
      <YearCounter initialValue={1970} />
      <DecadesCounter initialValue={1970} />
    </div>
  )
}