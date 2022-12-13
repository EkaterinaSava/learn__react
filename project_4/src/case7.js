import { useEffect, useState } from 'react';

function useCharacterPosition(step) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // eslint-disable-next-line
      switch (event.key) {
        case 'ArrowLeft':
          setLeft((prev) => prev - step);
          break;
        case 'ArrowRight':
          setLeft((prev) => prev + step);
          break;
        case 'ArrowUp':
          setTop((prev) => prev - step);
          break;
        case 'ArrowDown':
          setTop((prev) => prev + step);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [step]);

  return [left, top];
}

const initialStyle ={
  backgroundColor: 'red',
  position: 'absolute',
  width: 45,
  height: 45,
  left: 0,
  top: 0,
};

export function MoveRedSquare() {
  const [left, top] = useCharacterPosition(50);
  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    setStyle((prev) => {
      return {
        ...prev,
        left,
        top,
      }
    });
  }, [left, top]);
 
  return (
    <>
      <p>Use keyboard arrows for move Red Square</p>
      <h3>Square position: [{left}, {top}]</h3>
      <div
        style={style}
      />
    </>
  );
}