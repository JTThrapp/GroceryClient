import React, {useEffect, useState} from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
import Recipe from './components/Recipe/Recipe';
import Items from './components/Items/items';
import OurNav from './components/Navbar/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  //Recipe Variables
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

  const [sessionToken, setSessionToken] = useState(undefined);
  sessionToken === undefined ? console.log('No user signed in.') : console.log(`Your session token is: ${sessionToken}`) ;

  const viewConductor = () => {
    return sessionToken !== undefined ?
      <Items token= {sessionToken}/> :
      <Auth updateToken={updateToken}/>
  }

  const updateToken = newToken => {
    localStorage.setItem('token: ', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  

  return (
    <div className="App">
      <OurNav clearToken={clearToken}/>
      {viewConductor()}

      { /*Recipe*/ }
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

    </div>
  );
}

export default App;