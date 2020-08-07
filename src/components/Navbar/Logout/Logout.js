import React from 'react';
import logoutPic from '../../../assets/logout_thisone.svg'
import './Logout.css'

const Logout = (props) => {


return(
  <div>
      <img onClick={() => props.clearToken()} id="logout" src={logoutPic} alt="logout"/>
  </div>
)
};

export default Logout
