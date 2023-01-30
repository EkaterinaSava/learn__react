import { useState } from 'react';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import Card from '../UI/Card';
import CostDiagram from './CostDiagram';

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
      <CostDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  )
}

export default Costs;