import React, { Component } from 'react';
import NavTop from '../components/navigation/NavTop';
import Home from '../components/home/Home';
import Boards from '../components/home/Boards';
import CommonNav from '../components/navigation/CommonNav';
import Signin from '../components/signin/Signin';
import Register from '../components/register/Register';

export default class ChangeRoute extends Component {
    render() {
        const { route, onRouteChange, isSignedIn } = this.props;
        switch (route) {
            case 'home': return (
                <div>
                    <NavTop onRouteChange={onRouteChange} route={route} isSignedIn={isSignedIn} />
                    <Home />
                    <Boards />
                </div>
            );
            case 'signin': return (
                <div>
                    <CommonNav onRouteChange={onRouteChange} route={route} isSignedIn={isSignedIn} />
                    <Signin onRouteChange={onRouteChange} />

                </div>
            )
            case 'signup': return (

                <div>
                    <CommonNav onRouteChange={onRouteChange} route={route} isSignedIn={isSignedIn} />
                    <Register />
                </div>
            )
            case 'dashboard':
            case 'about':
            case 'contactus':
            default: return (<div>
                <CommonNav onRouteChange={onRouteChange} route={route} isSignedIn={isSignedIn} />
                {route}
            </div>)
        }
    }
}
