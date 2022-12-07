import { useState } from 'react';

function someHeavyFunc(maxNumber, maxPow) {
  const data = [];

  for (let i = 0; i < maxNumber; i++) {
    const record = {};

    for (let pow = 1; pow <= maxPow; pow++) {
      record[pow] = Math.pow(i, pow);
    }

    data.push(record);
  }

  return data;
}

function Row({ record }) {
  return (
    <tr>
      {Object.values(record)
        .sort((a, b) => a - b)
        .map((value, index) => (
          <td key={index}>{value}</td>
        ))
      }
    </tr>
  )
}

function HeaderRow({ maxPow }) {
  const cells = [];

  for (let pow = 1; pow <= maxPow; pow++) {
    cells.push(
      <th style={{ minWidth: 100 }} key={pow}>
        ^{pow}
      </th>
    );
  }

  return <tr>{cells}</tr>;
}

const MAX_NUMBER = 11;
const MAX_POW = 5;

export default function Table() {
  const [data, setData] = useState(() => {
    console.log('useState heavy table init');
    return someHeavyFunc(MAX_NUMBER, MAX_POW);
  });

  const [, setTriggerRender] = useState();

  const removeFirst = () => {
    setData(prevValue => {
      const [, ...rest] = prevValue;
      return rest;
    });
  };

  const reRender = () => setTriggerRender({});

  console.log('heavy table has been rendered');

  return (
    <>
      <div>
        <button onClick={removeFirst}>Remove first</button>
        <button onClick={reRender}>Trigger rerender</button>
      </div>
      <table className="table-heavy">
        <thead>
          <HeaderRow maxPow={MAX_POW}/>
        </thead>
        <tbody>
          {data.map((record) => (
            <Row key={record['1']} record={record} />
          ))}
        </tbody>
      </table>
    </>
  )
}