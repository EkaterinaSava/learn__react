import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 10),
    name: "Black Universal Plus Mixer",
    price: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 6, 6),
    name: "Razer Deathadder V3 Mouse",
    price: 120.00,
  },
  {
    id: "c3",
    date: new Date(2021, 8, 25),
    name: "MacBook Pro Notebook",
    price: 1254.72,
  },
  {
    id: "c4",
    date: new Date(2021, 9, 30),
    name: "Casual Slim Fit T-Shirts",
    price: 28.75,
  },
  {
    id: "c5",
    date: new Date(2022, 3, 1),
    name: "Fleece Crew Pullover",
    price: 49.99,
  },
  {
    id: "c6",
    date: new Date(2022, 5, 15),
    name: "Portable External Hard Drive",
    price: 114.00,
  },
  {
    id: "c7",
    date: new Date(2022, 7, 7),
    name: "Gaming Monitor – Super Ultrawide Screen",
    price: 999.99,
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
