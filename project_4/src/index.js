import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MasterCase } from './MasterCase/MasterCase';
import { Clicker as Case1} from './case1';
import { FormExample as Case2 } from './case2';
import { ExampleCounters as Case3 } from './case3';
import { Table as Case4 } from './case4';
import { Calculator as Case5 } from './case5';
import { EffectCounter as Case6 } from './case6';
import { MoveRedSquare as Case7 } from './case7';
import { RefExample as Case8a } from './case8';
import { RefEffect as Case8b } from './case8';
import { PinCode as Case9 } from './case9';
import { LoggedRender as Case10 } from './case10';
import { CallbackExample as Case11 } from './case11';
import { RenderRecursiveChilds as Case12 } from './case12';

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = {
  cs_1: { name: 'Case 1', component: Case1 },
  cs_2: { name: 'Case 2', component: Case2 },
  cs_3: { name: 'Case 3', component: Case3 },
  cs_4: { name: 'Case 4', component: Case4 },
  cs_5: { name: 'Case 5', component: Case5 },
  cs_6: { name: 'Case 6', component: Case6 },
  cs_7: { name: 'Case 7', component: Case7 },
  cs_8a: { name: 'Case 8a', component: Case8a },
  cs_8b: { name: 'Case 8b', component: Case8b },
  cs_9: { name: 'Case 9', component: Case9 },
  cs_10: { name: 'Case 10', component: Case10 },
  cs_11: { name: 'Case 11', component: Case11 },
  cs_12: { name: 'Case 12', component: Case12 },
};

root.render(
  <React.StrictMode>
    <MasterCase content={content} />
  </React.StrictMode>
);
