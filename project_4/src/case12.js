import React, { useMemo, useState, useRef } from 'react';

const palette = [
  '#FFAABB',
  '#AAFFBB',
  '#AACCBB',
  '#BBAABB',
  '#EEBBEE',
  '#EEBBAA',
  '#AAAAFF',
  '#FFAA99',
  '#99FF99',
  '#44FF44',
  '#11FFFF',
  '#DDFFFF',
];

function randomCssColor() {
  const index = Math.ceil(Math.random() * (palette.length - 1));
  return palette[index];
}

function Line({ width, left, top }) {
  const style = {
    position: 'absolute',
    left,
    top,
    width,
    height: '0',
    border: '1px dashed #000000',
  };

  return <div style={style} />
}

const Node = React.memo(({
  level = 1,
  cellWidth,
  cellHeight,
  maxLevel,
  left = 50,
  top = 150,
}) => {
  const rendersCounter = useRef(0);
  const [borderColor, setBorderColor] = useState('black');
  const height = cellHeight * Math.pow(2, maxLevel - level);

  const style = useMemo(() => ({
    left,
    top,
    width: cellWidth,
    height,
    backgroundColor: randomCssColor(),
    position: 'absolute',
    border: `2px solid ${borderColor}`,
    borderRadius: 8,
    transition: 'all 1s ease-out',
    zIndex: 10,
    color: 'black',
  }), [borderColor, cellWidth, height, left, top]);

  const onClick = (event) => {
    event.stopPropagation();
    setBorderColor(randomCssColor());
  };

  rendersCounter.current++;

  return (
    <div style={style} onClick={onClick}>
      {rendersCounter.current}
      {level < maxLevel ? (
        <>
          <Line left={cellWidth} top={height / 4} width={cellWidth} />
          <Node
            level={level + 1}
            maxLevel={maxLevel}
            cellWidth={cellWidth}
            cellHeight={cellHeight}
            left={cellWidth * 2}
            top={0}
          />
          <Line left={cellWidth} top={(height * 3) / 4} width={cellWidth} />
          <Node
            level={level + 1}
            maxLevel={maxLevel}
            cellWidth={cellWidth}
            cellHeight={cellHeight}
            left={cellWidth * 2}
            top={height / 2 + 1}
          />
        </>
      ) : null}
    </div>
  );
});

export function RenderRecursiveChilds() {
  return (
    <>
      <h4>Render childs with memo & useMemo</h4>
      <p>Click on one block:</p>
      <Node maxLevel={4} cellWidth={50} cellHeight={50} />
    </>
  )
}