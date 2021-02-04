import { Container, makeStyles, TextField } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        marginTop: "5rem",
    },
}));

const LoginComponent = () => {
    const classes = useStyles();

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

            </form>
        </Container>
    );
}

export default LoginComponent;