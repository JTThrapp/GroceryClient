import React, {useEffect, useState} from 'react';
import Recipe from './Recipe/Recipe';
import './Recipes.css';

const Recipes = () => {

    const appId = "b039b354";
    const appKey = "b5870411f65402898f8b6516bbf042eb";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');
  
    const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  
    useEffect ( () => {
      getRecipes();
    }, [query]);
  
    const getRecipes = async () => {
      const response = await fetch(exampleRequest);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
  
    const updateSearch = (event) => {
      setSearch(event.target.value);
    }
  
    const getSearch = event => {
      event.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return (
    <div id="recipes">
      <h3>Search Recipes</h3>
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe 
      key={recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} />
    ))}
    </div>
  );
}

export default Recipes;