import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h5 class="stock-match-item">Stock Match</h5></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/Home" style={{ textDecoration: 'none' }}><h5 class="nav-item">Home</h5></Link>
              </NavItem>
              <NavItem>
                <Link to="/Match" style={{ textDecoration: 'none' }}><h5 class="nav-item">Match</h5></Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Codubee/StockPickerMW10-11-Front"><h5 class="github-link">GitHub</h5></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
  
  export default Navigation;