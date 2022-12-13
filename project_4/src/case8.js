import { useEffect, useState, useRef, useCallback } from 'react';
import { useCounter } from './case3';

function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export function RefExample() {
  const refContainer = useRef();
  const toggledRef = useRef(false);
  const [toggledState, setToggledState] = useState(false);

  const focusInput = () => {
    refContainer.current?.focus();
  };

  const onChange = (event) => {
    const text = event.target.value;

    if (text === 'blur') {
      refContainer.current?.blur();
    }
  };

  const changeRef = () => {
    toggledRef.current = !toggledRef.current;
    console.log(`changeRef ${toggledRef.current}`);
  }

  const changeState = () => {
    setToggledState((prev) => !prev);
  }

  console.log(`Render! >>> toggledRef ${toggledRef.current}, >>> toggledState: ${toggledState}`);

  return (
    <div className="ref-example">
      <input ref={refContainer} onChange={onChange} placeholder="Write 'blur' here" />
      <button onClick={focusInput}>Click to focus input</button>
      <div>
        <h4>Render or no? (look console):</h4>
        <button onClick={changeRef}>Toggle ref</button>
        <button onClick={changeState}>Toggle state</button>
      </div>
    </div>
  );
}

export function RefEffect() {
  const [value, increment] = useCounter();

  useEffect(() => {
    console.log('ref effect mounted');
  }, []);

  console.log(`render, value: ${value}`);

  const callback = useCallback(() => {
    console.log(`>>> ref effect value updated: ${value}`)
  }, [value]);

  useUpdateEffect(callback);

  return (
    <button onClick={increment}>Rerender</button>
  )
}