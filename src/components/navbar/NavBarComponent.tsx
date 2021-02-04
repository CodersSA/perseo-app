import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.sass';
import RightMenu from './RightMenuComponent';
const NavComponent = () => {
    return (
        <div className="navbarCustom">
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="#home">PerseoApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                    </Nav>
                    <Navbar className="justify-content-end"><RightMenu /></Navbar>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default NavComponent;