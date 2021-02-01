import { Button, Container, FormControl } from '@material-ui/core';
import React from 'react';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.sass';
import RightMenu from './RightMenuComponent';
const NavComponent = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbarCustom">
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
    );
}

export default NavComponent;