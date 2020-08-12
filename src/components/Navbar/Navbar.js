import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout';
import { Nav, NavLink, Navbar } from 'reactstrap';
import Icon from 'C:/Users/caris/Documents/GitHub/GroceryClient/src/assets/groceryIcon.png'


const OurNav = (props) => {

    return (
        <div>
        <Navbar>
        <Nav>

                <NavLink><img id="Icon" src="https://cdn1.iconfinder.com/data/icons/smashicons-gastronomy-outline-vol-3/57/140_-_Grocery_Bag_gastronomy_food_cooking-512.png" alt="groceryIcon"/> Grocery App </NavLink>
    
                <NavLink href="/contact">Contact</NavLink>

                <Logout clearToken={props.clearToken} />
                
            
            
        </Nav>
        </Navbar>
        </div>

)
}

export default OurNav;