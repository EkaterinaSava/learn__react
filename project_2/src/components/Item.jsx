function Item(props) {
  const {
    offerId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({offerId, displayName, price})}>Add to cart</button>
        <span className="right card-price">{price.regularPrice} $</span>
      </div>
    </div>
  );
}

export { Item };