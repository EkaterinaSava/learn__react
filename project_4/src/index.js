import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clicker from './case1';
import FormExample from './case2';
import ExampleCounters from './case3';
import Table from './case4';
import Calculator from './case5';
import EffectCounter from './case6';
import MoveRedSquare from './case7';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <div className="component">
      <h3 className="component__heading">Example #1: Clicker</h3>
      <Clicker />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #2: Form with state</h3>
      <FormExample />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #3: Counters with Custom Hooks</h3>
      <ExampleCounters />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #4: Table with heavy re-render</h3>
      <Table />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #5: Calculator (with functions in useState)</h3>
      <Calculator />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #6: Counter with useEffect</h3>
      <EffectCounter />
    </div>

    <div className="component">
      <h3 className="component__heading">Example #7: Use keyboard arrows for move Red Square</h3>
      <MoveRedSquare />
    </div>

  </React.StrictMode>
);
