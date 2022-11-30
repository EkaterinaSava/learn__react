function CartItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
    removeFromCart = Function.prototype,
  } = props;

  return (
    <div className="collection-item">
      {displayName} x {quantity} = {price.regularPrice * quantity}
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