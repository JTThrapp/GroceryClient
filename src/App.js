import React, {useState} from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
import Recipes from './components/Recipes/Recipes';
import Items from './components/Items/Items';
import OurNav from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  sessionToken === undefined ? console.log('No user signed in.') : console.log(`Your session token is: ${sessionToken}`) ;

  const viewConductor = () => {
    return sessionToken !== undefined ?
        <div>
          <Sidebar token={sessionToken}/>
          <Recipes />
        </div>
       
      
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

  return(
    <div className="App">
      <OurNav clearToken={clearToken}/>
        {viewConductor()}
        <Router>
          <Switch>
          <Route path="/contact" component={Recipes}></Route>
          </Switch>
        </Router>
    </div>
  )


  // return (
  //   <Router>
  //     <div className="App">
  //       <OurNav clearToken={clearToken}/>
  //         {viewConductor()}
  //       <Switch>
  //         <Route path="/" exact component={Auth} updateToken={updateToken}/>
  //         <Route path="/recipes" component={Recipes} token={sessionToken}/>
  //         <Route path="/myList" component={Items} token={sessionToken}/>
  //       </Switch>
  //     </div>
  //   </Router>

  // );


}

export default App;