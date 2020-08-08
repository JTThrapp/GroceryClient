import React, {useState} from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
import Recipes from './components/Recipes/Recipes';
import Items from './components/Items/items';
import OurNav from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  sessionToken === undefined ? console.log('No user signed in.') : console.log(`Your session token is: ${sessionToken}`) ;

  const viewConductor = () => {
    return sessionToken !== undefined ?
      <Items token= {sessionToken}/>
      : <Auth updateToken={updateToken}/>
  }

  // const showHideLogin = () => {
  //   return sessionToken !== undefined ? <Auth updateToken={updateToken}/> : null
  // }

  const updateToken = newToken => {
    localStorage.setItem('token: ', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <Router>
      <div className="App">
        <OurNav clearToken={clearToken}/>
          {viewConductor()}
        <Switch>
          {/* <Route path="/" exact component={Auth} /> */}
          <Route path="/recipes" component={Recipes} />
          <Route path="/myList" component={Items} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;