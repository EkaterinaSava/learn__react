import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
  } = props;

  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
   } = useContext(ShopContext);

  return (
    <div className="collection-item">
      <span className="cart-modal__item-info">
        {displayName}
        <i
          className="cart-modal__item-quantity material-icons"
          onClick={() => decreaseQuantity(offerId)}
        >
          remove
        </i>
        {quantity}
        <i
          className="cart-modal__item-quantity material-icons"
          onClick={() => increaseQuantity(offerId)}
        >
          add
        </i>
        = {price.regularPrice * quantity}
      </span>
      <span
        className="secondary-content cart-modal__item-delete"
        onClick={() => removeFromCart(offerId)}
      >
        <i className="material-icons">clear</i>
      </span>
    </div>
  );
}

export { CartItem };