import React, {useState} from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
import Items from './components/Items/Items';
import OurNav from './components/Navbar/Navbar';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

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
    </div>
  );
}

export default App;