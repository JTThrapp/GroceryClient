import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout';
import { Nav, NavLink, Navbar } from 'reactstrap';
import Icon from '../../assets/grocery-cart.png'


const OurNav = (props) => {

    return (
        <div>
        <Navbar>
        <Nav>

                <NavLink href="/" ><img id="Icon" src={Icon} alt="groceryIcon"/> Grocery App </NavLink>
    
                <NavLink href="/contact">Contact</NavLink>

                <Logout clearToken={props.clearToken} />
                
            
            
        </Nav>
        </Navbar>
        </div>

)
}

export default OurNav;