import { useState, useRef } from 'react';
import PinInput from './PinInput/PinInput';

const initialDigits = ['', '', '', ''];

export function PinCode() {
  const [digits, setDigits] = useState(initialDigits);
  const ref = useRef();

  const focus = () => {
    ref.current?.focus();
  };

  const clear = () => {
    setDigits(initialDigits);
  }

  return (
    <div>
      <PinInput ref={ref} digits={digits} onChange={setDigits} />
      <p>
        <button onClick={focus}>Focus first input</button>
        <button onClick={clear}>Clear all inputs</button>
      </p>
    </div>
  );
}