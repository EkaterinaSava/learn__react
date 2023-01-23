import { useState } from 'react';
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props) {
  const [descr, setDescr] = useState(props.description);

  const changeDescr = () => {
    setDescr('bla bla');
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date}/>
      <div className="cost-item__details">
        <div className="cost-item__description">{descr}</div>
        <div className="cost-item__price">{props.price}</div>
      </div>
      <button onClick={changeDescr}>Change descr</button>
    </Card>
  )
}

export default CostItem;