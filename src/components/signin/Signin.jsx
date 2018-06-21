//@ts-check
import React, { Component } from 'react'



export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Student',
            link1: 'Faculty',
            link2: 'Admin',
            validPass: false,
            email: '',
            pass: ''
        }
    }

    onClickLink1 = () => {
        const { link1, link2 } = this.state;
        this.setState({ title: link1 });

        if (link1 === 'Faculty' && link2 === 'Admin') {
            this.setState({ link1: 'Student' });
        }
        else if (link1 === 'Faculty' && link2 === 'Student') {
            this.setState({ link1: 'Admin' });
        }
        else if (link1 === 'Student' && link2 === 'Admin') {
            this.setState({ link1: 'Faculty' });
        }
        else if (link1 === 'Student' && link2 === 'Faculty') {
            this.setState({ link1: 'Admin' });
        }
        else if (link1 === 'Admin' && link2 === 'Faculty') {
            this.setState({ link1: 'Student' });
        }
        else if (link1 === 'Admin' && link2 === 'Student') {
            this.setState({ link1: 'Faculty' });
        }
    }

    onClickLink2 = () => {
        const { link1, link2 } = this.state;
        this.setState({ title: link2 });

        if (link2 === 'Faculty' && link1 === 'Admin') {
            this.setState({ link2: 'Student' });
        }
        else if (link2 === 'Faculty' && link1 === 'Student') {
            this.setState({ link2: 'Admin' });
        }
        else if (link2 === 'Student' && link1 === 'Admin') {
            this.setState({ link2: 'Faculty' });
        }
        else if (link2 === 'Student' && link1 === 'Faculty') {
            this.setState({ link2: 'Admin' });
        }
        else if (link2 === 'Admin' && link1 === 'Faculty') {
            this.setState({ link2: 'Student' });
        }
        else if (link2 === 'Admin' && link1 === 'Student') {
            this.setState({ link2: 'Faculty' });
        }
    }

  

    render() {
        const { title, link1, link2} = this.state;
        const { onRouteChange } = this.props;
        return (
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4">
                <div className="tc pa5">
                    <div className="measure center">
                        <fieldset id="login"
                            className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">
                                {`${title} Login`}
                            </legend>
                            <hr className='gray bw1 br1 mw3' />
                            <div className="mt3 pa3">
                                <label className="db fw6 lh-copy f6 pb1"
                                    htmlFor="email-address">
                                    Email :
                                    </label>
                                <input
                                    className="pa2 br2 input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                />
                            </div>
                            <div className="pa3">
                                <label className="db fw6 lh-copy f6 pb1"
                                    htmlFor="password">
                                    Password :
                                    </label>
                                <input
                                    className="br2 pa2 input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                                
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                className="f6 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-purple pointer"
                                type="submit"
                                value="Login"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <span onClick={() => { onRouteChange('signup') }} className="f6 link dim blue db pointer pt3 pa1">Register</span>
                            <span onClick={this.onClickLink1} className="f6 link dim blue db pointer pa1">{`${link1} Login`}</span>
                            <span onClick={this.onClickLink2} className="f6 link dim blue db pointer pa1">{`${link2} Login`}</span>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
