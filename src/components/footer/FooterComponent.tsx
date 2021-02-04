import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.sass';
const FooterComponent = () => {
    const useStyles = makeStyles({
        footerMargin: {
            marginTop: "4rem",
        }
    });
    const classes = useStyles();
    return (
        <div className={classes.footerMargin}>
            <Navbar bg="light" expand="lg" className="navbarCustom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar className="justify-content-end"></Navbar>
                </Navbar.Collapse>
                <Navbar className="justify-content-end">All rights reserved ©</Navbar>
            </Navbar>
        </div>

    );
}

export default FooterComponent;