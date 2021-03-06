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
import '../styles/Navigation.css'


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h5 className="stock-match-item">Stock Match</h5></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/Home" style={{ textDecoration: 'none' }}><h5 className="nav-item">Home</h5></Link>
              </NavItem>
              <NavItem>
                <Link to="/Match" style={{ textDecoration: 'none' }}><h5 className="nav-item">Match</h5></Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Codubee/StockPickerMW10-11-Front" target="_blank"><h5 className="github-link">FrontEndGitHub</h5></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Codubee/StockPickerMW11-12-Back" target="_blank"><h5 className="github-link">BackEndGitHub</h5></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
  
  export default Navigation;