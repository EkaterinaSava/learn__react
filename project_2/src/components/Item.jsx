function Item(props) {
  const {
    offerId,
    displayName,
    displayDescription,
    price,
    displayAssets,
  } = props;

  return (
    <div className="card" id={offerId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Add to cart</button>
        <span className="right card-price">{price.regularPrice} $</span>
      </div>
    </div>
  );
}

export { Item };