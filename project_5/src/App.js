import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const costs = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    price: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 11, 25),
    description: "MacBook",
    price: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2022, 3, 1),
    description: "Джинсы",
    price: 49.99,
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
