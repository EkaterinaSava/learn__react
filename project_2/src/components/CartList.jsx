import { CartItem } from './CartItem';

import { useContext } from 'react';
import { ShopContext } from '../context';

function CartList() {
  const {
    order = [],
    handleCartShow = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price.regularPrice * item.quantity;
  }, 0); 

  return (
    <div className="collection cart-modal"> 
      <div className="collection-item active">Cart:</div>
      {
        order.length ? order.map(item => (
          <CartItem
            key={item.offerId}
            {...item}
          />
        )) : <div className="collection-item">Cart is empty.</div>
      }
      <div className="collection-item active cart-modal__total-price">
        <span>Total price:</span>
        <span>{totalPrice} $</span>
      </div>
      <div className="collection-item cart-modal__checkout">
        <button className="btn btn-small">
          Go to checkout
        </button>
      </div>
      <i className="material-icons cart-modal__close" onClick={handleCartShow}>close</i>
    </div>
  );
}

export { CartList };