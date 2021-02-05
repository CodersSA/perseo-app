import React from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.sass';
const FooterComponent = () => {
    return (
        <div className="footerCustom">
            <Navbar expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar className="justify-content-end"></Navbar>
                </Navbar.Collapse>
                <Navbar className="justify-content-end" style={{color: "white"}}>All rights reserved ©</Navbar>
            </Navbar>
        </div>

    );
}

export default FooterComponent;