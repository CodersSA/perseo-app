import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  HomeComponent from '../components/home/HomeComponent';
import NavComponent from '../components/navbar/NavBarComponent';
import FooterComponent from '../components/footer/FooterComponent';
import LoginComponent from './login/LoginComponent';
import { makeStyles } from '@material-ui/core';
const MainComponent = () => {
    const useStyles = makeStyles({
        root: {
          backgroundColor: "#0d0d0d",
          width: "100%",
          height: "100vh",
        },
      });
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <NavComponent />
                <Switch>
                    <Route path='/home'
                        component={ HomeComponent } />
                </Switch>
                <Switch>
                    <Route path='/login' component={LoginComponent}/>
                </Switch>
                <FooterComponent />

            </div>
        </BrowserRouter>
    );
}
/*
    register
    login
    profile (version normal y admin)
    courses
    admin dashboard
*/
export default MainComponent;