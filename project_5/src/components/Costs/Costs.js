import CostItem from './CostItem';
import Card from '../UI/Card';

function Costs(props) {
  return (
    <Card className="costs">
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