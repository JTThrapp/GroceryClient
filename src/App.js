import React, {useState} from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Auth from './components/Auth/Auth';
import Recipes from './components/Recipes/Recipes';
import OurNav from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  let ls = localStorage.getItem('token');

  if (ls !== null ) {
    ls = localStorage.getItem('token').toString();
  }
  const [sessionToken, setSessionToken] = useState(ls);

  const displayLogin = () => {
    return ls !== null ?
        <div> </div>
      : <Auth updateToken={updateToken}/>
  }
  const displayRecipes = () => {
    return ls !== null ?
        <div>
          <Sidebar token={sessionToken}/>
          <Recipes />          
        </div>
      : null;
  }

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }



  return(
    <div className="App">
      <OurNav token={sessionToken} clearToken={clearToken}/>
        {displayLogin()}
        <Router>
          <Switch>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/">{displayRecipes}</Route>
          {/* <Route path="/contact" render={MyContactPage}></Route> */}
          </Switch>
        </Router>
    </div>
  )


}

export default App;