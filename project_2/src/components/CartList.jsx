import { CartItem } from './CartItem';
function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price.regularPrice * item.quantity;
  }, 0); 

  return (
    <div className="collection cart-modal"> 
      <div className="collection-item active">Cart:</div>
      {
        order.length ? order.map(item => (
          <CartItem key={item.offerId} removeFromCart={removeFromCart} {...item} />
        )) : <div className="collection-item">Cart is empty.</div>
      }
      <div className="collection-item active cart-modal__total-price">
        <span>Total price:</span>
        <span>{totalPrice} $</span>
      </div>
      <i className="material-icons cart-modal__close" onClick={handleCartShow}>close</i>
    </div>
  );
}

export { CartList };