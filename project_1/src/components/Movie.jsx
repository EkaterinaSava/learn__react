function Movie (props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ?
            <img className="card-image__image" src={`https://via.placeholder.com/300x150?text=${title}`} alt="" />
            :
            <img className="card-image__image" src={poster} alt="" /> 
        }
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
  )
}

export { Movie }