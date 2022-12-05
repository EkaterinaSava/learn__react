import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const {
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = props;

  return (
    <div className="card category-list__card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p className="card-desc">{strCategoryDescription.slice(0, 70)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">Watch category</Link>
      </div>
    </div>
  );
}

export {CategoryItem };