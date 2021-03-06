import React, { Component } from 'react'

export default class CommonNav extends Component {
    render() {
        const { onRouteChange, route, isSignedIn, userType } = this.props;
        return (
            <div>
                <div className={`bg-near-black ${route === 'home' ? 'o-60' : ''}`}>
                    <nav className={`dt w-100 mw8 center`} >
                        <div className="dtc w2 v-mid pa2">
                            <div
                                className="dib w2 h2 pa1 ba b--white-90 grow-large border-box pointer"
                                onClick={() => onRouteChange('home')}>
                                <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                            </div>
                        </div>
                        <div className="dtc v-mid tl pa2">
                            <span className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                onClick={() => onRouteChange('home')}>
                                Home</span>
                            {
                                !isSignedIn
                                    ? <span>
                                        <span className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                            onClick={() => onRouteChange('about')}>
                                            About</span>
                                        <span className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                            onClick={() => onRouteChange('contact')}>
                                            Contact Us</span>
                                    </span>
                                    : <span>
                                        <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                            onClick={() => onRouteChange('dashboard')}>
                                            Dashboard</p>
                                        {
                                            userType === 'student'
                                                ? <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                                    onClick={() => onRouteChange('payments')}>
                                                    Payments</p>
                                                : userType === 'faculty'
                                                    ? <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                                        onClick={() => onRouteChange('studentlist')}>
                                                        Students List</p>
                                                    : userType === 'admin'
                                                        ? <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer"
                                                            onClick={() => onRouteChange('facultylist')}>
                                                            Faculty List</p>
                                                        : <p></p>

                                        }
                                    </span>
                            }
                        </div>
                        {
                            !isSignedIn
                                ? <div className="dtc v-mid tr pa2">
                                    <p className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer"
                                        onClick={() => onRouteChange('signin')}>
                                        Sign In</p>
                                    <p className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer"
                                        onClick={() => onRouteChange('signup')}>
                                        Sign Up</p>
                                </div>
                                : <div className="dtc  v-mid tr pa2">
                                    <span className="flex justify-end f6 fw4 hover-white no-underline white-70 dib ml2  ph3 pointer"
                                        onClick={() => onRouteChange('dashboard')}>
                                    <img
                                        src="http://tachyons.io/img/logo.jpg"
                                        className="dib br-100 h2 w2 mr2 mt1" alt="avatar" />
                                        <p className='dib v-mid'>
                                        Welcome Neelkantha
                                        </p>
                                        </span>
                                </div>
                        }
                    </nav>
                </div>
                {/*  {
                isSignedIn  
                ?<DashNav route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn} userType = {userType}/>
                :<div></div>
            } */}
            </div>
        )
    }
}
