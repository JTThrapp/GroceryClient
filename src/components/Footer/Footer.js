import React from 'react';
import './Footer.css';
import { Nav, NavLink, Navbar } from 'reactstrap';

const Footer = (props) => {

return(
    <div>
    <Footer>
    <Nav>
        <NavLink><img id="Icon" src="https://pp.netclipart.com/pp/s/329-3295356_seguici-su-facebook-facebook-f-icon-svg.png" alt="Facebook"/></NavLink>
        <NavLink><img id="Icon" src="https://www.flaticon.com/authors/pixel-perfect" alt="Twitter"/></NavLink>
        <NavLink><img id="Icon" src="https://www.seekpng.com/png/detail/328-3289308_black-youtube-icon-download-logo-youtube-grey.png" alt="Instagram"/></NavLink>
        <NavLink><img id="Icon" src="https://cdn.iconscout.com/icon/free/png-512/instagram-201-599421.png" alt="Youtube"/></NavLink>
    </Nav>
    </Footer>
    </div>
)
}



export default Footer;