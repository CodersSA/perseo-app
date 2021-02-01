import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import  HomeComponent from '../components/home/HomeComponent';
import NavComponent from '../components/navbar/NavBarComponent';

const MainComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <NavComponent />
                <Redirect
                    from='/'
                    to='/home' />
                <Switch>
                    <Route path='/home'
                        component={ HomeComponent } />
                </Switch>
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