import { useState } from 'react';
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props) {
  const [name, setName] = useState(props.name);

  const changeName = () => {
    setName('bla bla');
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date}/>
      <div className="cost-item__details">
        <div className="cost-item__description">{name}</div>
        <div className="cost-item__price">{props.price}</div>
      </div>
      <button onClick={changeName}>Change descr</button>
    </Card>
  )
}

export default CostItem;