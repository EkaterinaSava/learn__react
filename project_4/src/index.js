import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clicker from './case1';
import FormExample from './case2';

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

  </React.StrictMode>
);
