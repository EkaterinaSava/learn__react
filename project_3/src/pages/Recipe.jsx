import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';

import { Preloader } from '../components/Preloader';

function Recipe() {
  const { id } = useParams();
  const { goBack } = useHistory();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  console.log(recipe)

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img className="recipe__img" src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h4 className="recipe__heading">{recipe.strMeal}</h4>
          <h6 className="recipe__category">Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6 className="recipe__area">Cuisine area: {recipe.strArea}</h6> : null}
          <p className="recipe__instruction">{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(recipe).map(key => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{
                          recipe[`strMeasure${key.slice(13)}`]
                        }</td>
                      </tr>
                    )
                  }
                  return null;
                })
              }
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div>
              <h5>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
              />
            </div>
          ) : null}
        </div>
      )}

      <button className="btn" onClick={goBack}>⇽ Go Back</button>
    </>
  );
}

export { Recipe };
