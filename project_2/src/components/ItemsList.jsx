import { Item } from './Item';

function ItemsList(props) {
  const { items = [], addToCart = Function.prototype } = props;

  if (!items.length) {
    return <h3>No items in shop.</h3>
  }

  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.offerId} {...item} addToCart={addToCart} />
      })}
    </div>
  );
}

export { ItemsList };