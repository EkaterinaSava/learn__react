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
import { ContextExample as Case13 } from './case13';
import { ReducerExample as Case14a } from './case14';
import { ContactsBook as Case14b } from './components/Case14/ContactsBook';
import { DebugValueExample as Case15 } from './case15';
import { HooksFactory as Case16 } from './case16';

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = {
  cs_1:   { name: 'Case 1', component: Case1 },
  cs_2:   { name: 'Case 2', component: Case2 },
  cs_3:   { name: 'Case 3', component: Case3 },
  cs_4:   { name: 'Case 4', component: Case4 },
  cs_5:   { name: 'Case 5', component: Case5 },
  cs_6:   { name: 'Case 6', component: Case6 },
  cs_7:   { name: 'Case 7', component: Case7 },
  cs_8a:  { name: 'Case 8a', component: Case8a },
  cs_8b:  { name: 'Case 8b', component: Case8b },
  cs_9:   { name: 'Case 9', component: Case9 },
  cs_10:  { name: 'Case 10', component: Case10 },
  cs_11:  { name: 'Case 11', component: Case11 },
  cs_12:  { name: 'Case 12', component: Case12 },
  cs_13:  { name: 'Case 13', component: Case13 },
  cs_14a: { name: 'Case 14a', component: Case14a },
  cs_14b: { name: 'Case 14b', component: Case14b },
  cs_15:  { name: 'Case 15', component: Case15 },
  cs_16:  { name: 'Case 16', component: Case16 },
};

root.render(
  <React.StrictMode>
    <MasterCase content={content} />
  </React.StrictMode>
);
