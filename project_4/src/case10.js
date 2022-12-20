import { useState, useRef, forwardRef } from 'react';
import PinInput from './components/PinInput';

function logRender(WrappedComponent) {
  return forwardRef(function(props, ref) {
    const name = WrappedComponent.name ?? WrappedComponent.render?.name;
    console.log(`render ${name} from logRender function`);
    return <WrappedComponent ref={ref} ${...props} />
  });
}

function SimpleText({ text }) {
  return <span>{text}</span>;
}

const LoggedSimpleText = logRender(SimpleText);
const LoggedPinInput = logRender(PinInput);

export function LoggedRender() {
  const [digits, setDigits] = useState(['', '', '']);
  const inputRef = useRef();

  const focus = () => inputRef.current?.focus();

  return (
    <div className="logged-render">
      <div>
        <h4>HOC: LoggedSimpleText</h4>
        <LoggedSimpleText text="Some text" />
      </div>
      <div>
        <h4>HOC: LoggedPinInput</h4>
        <LoggedPinInput ref={inputRef} digits={digits} onChange={setDigits} />
        <p><button onClick={focus}>Focus first input</button></p>
      </div>
    </div>
  );
}