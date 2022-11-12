import React from "react";
import './Header.css'
import logo from './gym-logo.jpg'

//-------------------------------

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//-------------------------------

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Login">tab_A</Nav.Link>
                        <Nav.Link href="#pricing">tab_B</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">tab_C1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">tab_C2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">tab_C3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                tab_C4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Register</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div className="header">
        //     <div className="header__left">
        //         <img
        //             className="header__logo"
        //             // src="https://c8.alamy.com/comp/2D6RMP3/i-love-gym-logo-icon-fitness-center-dumbell-and-heart-health-care-concept-stock-vector-illustration-isolated-on-white-background-2D6RMP3.jpg"
        //             src = {logo}
        //             alt="img 404"
        //         />
        //     </div>
        //     <div className="header__tabs">
        //         <h2> |__Home__|--|__Explore__|--|__Trending__|</h2>
        //         {/* <h3></h3> */}
        //         <h3></h3>
        //     </div>
        // </div>
    )
}

export default Header