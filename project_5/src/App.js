import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    name: "Холодильник",
    price: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 11, 25),
    name: "MacBook",
    price: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2022, 3, 1),
    name: "Джинсы",
    price: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="wrapper">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
