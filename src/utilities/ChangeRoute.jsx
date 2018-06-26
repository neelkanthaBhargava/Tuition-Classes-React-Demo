import React, { Component } from 'react';
import NavTop from '../components/navigation/NavTop';
import Home from '../components/home/Home';
import Boards from '../components/home/Boards';
import CommonNav from '../components/navigation/CommonNav';
import Signin from '../components/signin/Signin';
import Register from '../components/register/Register';
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
import Dashboard from '../components/dash/Dashboard';

export default class ChangeRoute extends Component {
    render() {
        const { route, onRouteChange, isSignedIn, userType, user } = this.props;
        switch (route) {
            case 'home': return (
                <div>
                    <NavTop
                        onRouteChange={onRouteChange}
                        route={route}
                        isSignedIn={isSignedIn}
                        userType={userType} />
                    <Home />
                    <Boards />
                </div>
            );
            case 'signin': return (
                <div>
                    <CommonNav
                        onRouteChange={onRouteChange}
                        route={route}
                        isSignedIn={isSignedIn}
                        userType={userType} />
                    <Signin onRouteChange={onRouteChange} />

                </div>
            )
            case 'signup': return (
                <div>
                    <CommonNav
                        onRouteChange={onRouteChange}
                        route={route}
                        isSignedIn={isSignedIn}
                        userType={userType} />
                    <Register />
                </div>
            );
            case 'about': return (
                <div>
                    <CommonNav
                        onRouteChange={onRouteChange}
                        route={route}
                        isSignedIn={isSignedIn}
                        userType={userType} />
                    <About />
                </div>
            );
            case 'contact': return (
                <div>
                    <CommonNav
                        onRouteChange={onRouteChange}
                        route={route}
                        isSignedIn={isSignedIn}
                        userType={userType} />
                    <ContactUs />
                </div>
            );
            case 'dashboard': return (<div>
                <CommonNav
                    onRouteChange={onRouteChange}
                    route={route}
                    isSignedIn={isSignedIn}
                    userType={userType} />
                <Dashboard user={user} userType={userType} />
                {route}
            </div>)
            default: return (<div>
                <CommonNav
                    onRouteChange={onRouteChange}
                    route={route}
                    isSignedIn={isSignedIn}
                    userType={userType} />
                {route}
            </div>)
        }
    }
}
