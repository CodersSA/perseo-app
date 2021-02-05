import { Button, Container, Grid, Link, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            color: 'white'
        },
        '& .MuiInput-input': {
            color: "black",
            backgroundColor: "#f8f9fa",
            input: "black"
        },
        '& .MuiInput-underline': {
            color: 'red'
        },
        marginTop: "15rem",
        color: "white"
    },
    containerLoginCustom: {
        borderColor: 'white',
    }
}));

const LoginComponent = () => {

    const [isLogin, setIsLogin] = useState(true);

    const handleClick = () => {
        setIsLogin(!isLogin);
    }

    // const handleSubmit = () => {
    //     if (isLogin === true) {
    //         //llamar al metodo login
    //     } else {
    //         //llamar el metodo registerD
    //     }
    // }

    const classes = useStyles();
    return (
        <Container >
            <Container className={classes.containerLoginCustom}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {
                            isLogin === true ?
                                <Container style={{ textAlign: 'center' }}>
                                    <h1>Log In</h1>
                                </Container>
                                : <Container style={{ textAlign: 'center' }}>
                                    <h1>Register</h1>
                                </Container>}
                        <hr />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            type="email"
                            variant="standard"
                        />
                        <label>Email</label>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <label style={{ textAlign: 'left' }}>Password</label>

                        <hr />
                        <p> {
                            isLogin === true ? 'Not registered yet?' : 'Go Back to '}
                            <Link href="#" onClick={() => handleClick()}>{
                                isLogin === true ? ' Register' : ' Login'}
                            </Link>
                        </p>
                        <Button variant="contained" color="secondary">
                            {isLogin === true ? 'Login' : 'Register'}
                        </Button>

                    </Grid>
                </form>
            </Container>


        </Container>
    );
}

export default LoginComponent;