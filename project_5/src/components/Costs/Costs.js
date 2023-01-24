import { useState } from 'react';
import CostsFilter from './CostsFilter';
import CostItem from './CostItem';
import Card from '../UI/Card';

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>

      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        price={props.costs[0].price}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        price={props.costs[1].price}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        price={props.costs[2].price}
      />
    </Card>
  )
}

export default Costs;