import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props) {
  return (
    <Card className="cost-item">
      <CostDate date={props.date}/>
      <div className="cost-item__details">
        <div className="cost-item__description">{props.name}</div>
        <div className="cost-item__price">{props.price} €</div>
      </div>
    </Card>
  )
}

export default CostItem;