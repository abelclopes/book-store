import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { logout } from '../../services/auth';
import './NavMenu.css';
const NavMenu = ({...props}) => {
  
  const history = useHistory();
  
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand href="/">Book Store</NavbarBrand>
            <NavbarToggler onClick={()=>toggleNavbar()} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink  className="text-dark"  href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  className="text-dark" href="/books">Books</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#" onClick={()=> {
                    logout()
                    window.location = '/';
                  }}>Logout</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
}
export default NavMenu;