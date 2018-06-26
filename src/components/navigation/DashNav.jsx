import React, { Component } from 'react'

export default class DashNav extends Component {
    render() {
        const { route, onRouteChange, userType } = this.props;
        return (
            <div className={`bg-white ${route === 'home' ? 'o-60' : ''}`}>
                <nav className={`dt w-100 mw8 center`} >
                    <div className="dtc v-mid tl pa2">
                        <span className="f6 fw4 hover-white no-underline black-70 dib pv2 ph3 pointer"
                            onClick={() => onRouteChange('dashboard')}>
                            Dashboard</span>
                        {
                            userType === 'student'
                                ? <span className="f6 fw4 hover-white no-underline black-70 dib pv2 ph3 pointer"
                                    onClick={() => onRouteChange('payments')}>
                                    Payments</span>
                                : userType === 'faculty'
                                    ? <span className="f6 fw4 hover-white no-underline black-70 dib pv2 ph3 pointer"
                                        onClick={() => onRouteChange('studentsList')}>
                                        Students List</span>
                                    : userType === 'admin'
                                        ? <span className="f6 fw4 hover-white no-underline black-70 dib pv2 ph3 pointer"
                                            onClick={() => onRouteChange('facultyList')}>
                                            Faculty List</span>
                                        : <span></span>
                        }
                    </div>
                </nav>
            </div>
        );
    }
}
