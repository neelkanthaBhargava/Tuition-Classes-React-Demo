import React, { Component } from 'react'
import './NavTop.css';
class NavTop extends Component {
    render() {
        return (
            <div>
                <header >
                    <div className="cover bg-left bg-center-l bg-image-url" >
                        <div className="bg-black-80 pb5 pb6-m pb7-l">
                            <nav className={`dt w-100 mw8 center`} >
                                <div className="dtc w2 v-mid pa3">
                                    <div
                                        className="dib w2 h2 pa1 ba b--white-90 grow-large border-box pointer">
                                        <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                                    </div>
                                </div>
                                <div className="dtc v-mid tl pa3">
                                    <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer">
                                        Home</p>
                                    <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer">
                                        About</p>
                                </div>
                                <div className="dtc v-mid tr pa3">
                                    <p className="f6 fw4 hover-white no-underline white-70 dib pv2 ph3 pointer">
                                        Contact Us</p>
                                    <p className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer">
                                        Sign In</p>
                                    <p className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer">
                                        Sign Up</p>
                                </div>
                            </nav>
                            <div className="tc-l mt4 mt5-m mt6-l ph3">
                                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title header-quotes">
                                    “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”
                                </h1>
                                <h2 className="fw1 f3 white-80 mt3 mb4">WRITE SOMETHING AWESOME</h2>
                                <div className="f5 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-dark-blue shadow-5" >Sign In</div>
                                <span className="f5 dib pv2 ph4 white-70 mb2">or</span>
                                <div className="f5 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-dark-gray shadow-5" >Sign Up</div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
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