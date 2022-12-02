import { Item } from './Item';

import { useContext } from 'react';
import { ShopContext } from '../context';

function ItemsList() {
  const { items = [] } = useContext(ShopContext);

  if (!items.length) {
    return <h3>No items in shop.</h3>
  }

  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.offerId} {...item} />
      })}
    </div>
  );
}

export { ItemsList };