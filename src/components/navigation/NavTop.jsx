//@ts-check
import React, { Component } from 'react'
import './NavTop.css';
import HomeHeader from './HomeHeader';
import CommonNav from './CommonNav';

class NavTop extends Component {

    render() {
        const { onRouteChange, route, isSignedIn, userType } = this.props;
        return (
            <div>
                <header >
                    <div className="cover bg-left bg-center-l bg-image-url" >
                        <div className="bg-black-80 pb5 pb6-m pb7-l">
                            <CommonNav
                                onRouteChange={onRouteChange}
                                route = {route}
                                isSignedIn={isSignedIn}
                                userType={userType} />
                            <HomeHeader
                                onRouteChange={onRouteChange}
                                isSignedIn={isSignedIn} />
                        </div>
                    </div>
                </header>
            </div >
        )
    }
}

export default NavTop;


/* componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

resize() {
    this.setState({hideNav: window.innerWidth <= 760});
} */