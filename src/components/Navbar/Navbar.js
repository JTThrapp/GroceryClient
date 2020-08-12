import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout';
import { Nav, NavLink, Navbar } from 'reactstrap';
<<<<<<< HEAD
=======
import Icon from '../../assets/grocery-cart.png'
>>>>>>> 6970a063a49148427f855965ea68aec7557fcdf5


const OurNav = (props) => {

    return (
        <div>
        <Navbar>
        <Nav>

                <NavLink><img id="Icon" src={Icon} alt="groceryIcon"/> Grocery App </NavLink>
    
                <NavLink href="/contact">Contact</NavLink>

                <Logout clearToken={props.clearToken} />
                
            
            
        </Nav>
        </Navbar>
        </div>

)
}

export default OurNav;