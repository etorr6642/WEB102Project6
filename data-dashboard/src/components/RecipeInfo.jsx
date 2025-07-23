import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import SideNav from "./SideNav";
const API_KEY = import.meta.env.VITE_APP_API_KEY

// this component fetches extra data about the recipe and takes in the id, title, image and calories from App.jsx
const RecipeInfo=({id, title, image, calories })=>{

    //state variable
    const [details, setDetails]=useState(null);

    //fetches data on render using recipe id passed from App.jsx
    useEffect(() => {
        fetchRecipeDetails().catch(console.error);
    }, [id])

    // fetched more data regarding the recipe
    const fetchRecipeDetails = async()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const data = await res.json();
        setDetails(data);
        console.log(data);

        const toStore = {
            id: data.id,
            title,
            image,
            calories,
            readyInMinutes: data.readyInMinutes,
            servings: data.servings,
            spoonacularScore: data.spoonacularScore,
            dishTypes: data.dishTypes,
            summary: data.summary, 
            instructions: data.instructions
        };

    localStorage.setItem(`recipe-${id}`, JSON.stringify(toStore));
    console.log(toStore)

    };

    return(
        // display recipe information
        <div>
    
        
                <li className="recipe-card">
                    <Link to={`/recipe/${id}`}>
                    {/* displays image */}
                    <div className='image-container'>
                        <img className='icons' src={image} alt={title} width="100" />
                    </div>
                    </Link>
                    {/* displays title and calories */}
                    <div className="details-container">
                    <h3>{title}</h3>
                    <p>Calories: {calories}</p>
                    
                    {/* displays prep time, servings, and a link to full recipe */}
                    {details && (
                        <>
                        <p>Ready in: {details.readyInMinutes} minutes</p>
                        <p>Servings: {details.servings}</p>
                        <a href={details.sourceUrl} target="_blank">Full Recipe</a>
                        </>
                    )}
                    </div>
                </li>
            </div>
    
    );

   



} 

export default RecipeInfo;