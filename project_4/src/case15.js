import { useCallback, useDebugValue, useState } from 'react';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue || false);

  useDebugValue(value);

  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);

  return [value, toggle];
}

function ToggleButton({ toggled, handleToggle }) {
  const caption = toggled ? 'ON' : 'OFF';

  return (
    <button style={{ width: 100 }} onClick={handleToggle}>
      {caption}
    </button>
  );
}

function SettingsToggle({ label, initialValue }) {
  const [isEnabled, toggleEnabled] = useToggle(initialValue);

  return (
    <div style={{ margin: 16 }}>
      <ToggleButton toggled={isEnabled} handleToggle={toggleEnabled} />
      <span style={{ marginLeft: 16 }}>{label}</span>
    </div>
  );
}

export function DebugValueExample() {
  return (
    <>
      <h2>useDebugValue & React dev tools</h2>
      <SettingsToggle label="Audio Enabled" initialValue={true} />
      <SettingsToggle label="Video Enabled" initialValue={false} />
      <p>See results in React DevTools, panel "Components"</p>
    </>
  );
}