import { useState } from 'react';

export function Clicker() {
  const [clicks, setClicks] = useState(0);
  const [showClicks, setShowClicks] = useState(false);

  const onClick = () => setClicks(clicks + 1);

  const toggleShowClicks = () => {
    setShowClicks((prev) => !prev);
  }

  const clicksText = showClicks ? ` Clicked - (${clicks}) times` : '';
 
  return (
    <div className="clicker">
      <button onClick={onClick}>Click me!{clicksText}</button>
      <button onClick={toggleShowClicks}>Toggle show clicks</button>
    </div>
  );
}
