import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout'
import { Nav, NavLink, Navbar } from 'reactstrap';


const OurNav = (props) => {

    return (
        <div>
        <Navbar>
        <Nav>
                <NavLink href="/"> Grocery App </NavLink>
    
                <NavLink href="/contact">Contact</NavLink>

                <Logout clearToken={props.clearToken} />
                
            
            
        </Nav>
        </Navbar>
        </div>

)
}

export default OurNav;