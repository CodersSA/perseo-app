import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  HomeComponent from '../components/home/HomeComponent';
import NavComponent from '../components/navbar/NavBarComponent';
import FooterComponent from '../components/footer/FooterComponent';
import LoginComponent from './login/LoginComponent';
const MainComponent = () => {
    return (
        <BrowserRouter>
            <div>
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