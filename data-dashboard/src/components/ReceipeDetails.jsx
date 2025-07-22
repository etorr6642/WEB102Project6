import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams(); // assumes route like /recipe/:id
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipe = localStorage.getItem(`recipe-${id}`);
    if (storedRecipe) {
      setRecipe(JSON.parse(storedRecipe));
    } else {
      console.warn("Recipe data not found in localStorage.");
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading recipe details...</div>;
  }

  return (
    <div>

        <h1>{recipe.title}</h1>
        <div className="recipe-details-page">
        
        <img src={recipe.image} alt={recipe.title} width="200" />
        <p><strong>Calories:</strong> {recipe.calories}</p>
        <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
        <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
        <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Score:</strong> {recipe.spoonacularScore?.toFixed(2)}</p>
        <p><strong>Dish Types:</strong> {recipe.dishTypes?.join(", ")}</p>
        <div className='summary'>
            <strong>Summary:</strong>
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        </div>
        <div className='instructions'>
            <strong>Instructions:</strong>
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
        </div>
    </div>
  );
};

export default RecipeDetails;