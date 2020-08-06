import React, {useState} from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  const updateToken = newToken => {
    localStorage.setItem('token: ', newToken);
    setSessionToken(newToken)
  }

  //! We will use this once we get a signout button
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken(undefined);
  // }

  return (
    <div className="App">
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;