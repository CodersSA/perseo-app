import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.sass';
import RightMenu from './RightMenuComponent';
const NavComponent = () => {
    return (
        <div className="colorCustomNav">
            <Navbar expand="lg" variant="light" className="navbarCustom">
                <Navbar.Brand href="#home" style={{color: "white"}}>PerseoApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" id="customColorNav">
                        <Nav.Link href="/home" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="/courses" style={{color: "white"}}>Courses</Nav.Link>
                    </Nav>
                    <Navbar className="justify-content-end"><RightMenu /></Navbar>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default NavComponent;