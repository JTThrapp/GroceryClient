import React, {useState} from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Auth from './components/Auth/Auth';
import Recipes from './components/Recipes/Recipes';
import OurNav from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  
  
  sessionToken === undefined ? console.log('No user signed in.') : console.log(`Your session token is: ${sessionToken}`) ;

  console.log(`local storage: ${localStorage.getItem('token')}`)

  let ls = localStorage.getItem('token')

  const viewConductor = () => {
    return sessionToken !== undefined ?
    // return sessionToken !== undefined ?
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
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  // const MyContactPage = (props) => {
  //   return (
  //     <Contact 
  //       sessionToken={this.sessionToken.bind(this)}
  //       {...props}
  //     />
  //   );
  // }

  return(
    <div className="App">
      <OurNav token={sessionToken} clearToken={clearToken}/>
        {viewConductor()}
        <Router>
          <Switch>
          <Route path="/contact" ></Route>
          {/* <Route path="/contact" render={MyContactPage}></Route> */}
          </Switch>
        </Router>
    </div>
  )


}

export default App;