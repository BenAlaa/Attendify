import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavLogo, NavbarBrand, NavButton, NavbarToggelerIcon, NavBarCollapse, NavBarNav, NavBarItemActive, NavBarItem, NavBarLink, NavDropDown, NavDropdownItems } from './NavBarStyledComponents'
import logo from '../../Assets/logo.png';
import { Container, Row } from 'styled-bootstrap-grid';


const NavBar = ({user}) => {
    return ( 
        <Nav>
            <Container>
                <Row>
                    <NavLink className="navbar-brand" to="/attendence"><NavLogo src={logo}></NavLogo><NavbarBrand>Attendify</NavbarBrand></NavLink>
                    <NavButton data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <NavbarToggelerIcon></NavbarToggelerIcon>
                    </NavButton>
                    <NavBarCollapse>
                        <NavBarNav>
                            <NavBarItemActive>
                                <NavLink className="nav-link"  to="/attendence">
                                    <NavBarLink>Attendence</NavBarLink>
                                </NavLink>
                            </NavBarItemActive>

                            {!user && <NavBarItem>
                                <NavLink className="nav-link" to="/login">
                                    <NavBarLink>Login</NavBarLink>
                                </NavLink>
                            </NavBarItem>}

                            {user && <NavDropDown>
                                <NavLink className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {user.name}
                                </NavLink>
                                <NavDropdownItems>
                                    <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                                </NavDropdownItems>
                            </NavDropDown>}
                            
                        </NavBarNav>
                    </NavBarCollapse>
                </Row>
            </Container>
        </Nav>
     );
}
 
export default NavBar;
