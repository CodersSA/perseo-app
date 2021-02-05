import { Button, Container, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";

const RightMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e:any) => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Container>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <label style={{color: "white"}}><BsFillPersonFill style={{color: "white"}}/>Illya G.</label>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Container>

    );
}

export default RightMenu;