//@ts-check
import React, { Component } from 'react';

export default class FacultyLogin extends Component {
    render() {
        return (
            <div>
                <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4">
                    <div className="tc pa5">
                        <div className="measure center">
                            <fieldset id="faculty_login"
                                className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">
                                    Registration
                                </legend>
                                <hr className='gray bw1 br1 mw3' />
                                <div className="mt3 pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="uname">
                                        Student Name :
                                    </label>
                                    <input
                                        className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="uname"
                                        id="uname"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="email-address">
                                        Email :
                                    </label>
                                    <input
                                        className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
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
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="contact-number">
                                        Contact Number :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="contact-number"
                                        id="contact-number"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="std">
                                        Class :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="std"
                                        id="std"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="board">
                                        Board :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="board"
                                        id="board"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="school">
                                        School :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="school"
                                        id="school"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="address">
                                        Address :
                                    </label>
                                    <textarea
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        name="address"
                                        id="address"
                                        rows={3}
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="fatherName">
                                        Father's Name :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="fatherName"
                                        id="fatherName"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="fatherContact">
                                        Father's Contact Number :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="fatherContact"
                                        id="fatherContact"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="motherName">
                                        Mother's Name :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="motherName"
                                        id="motherName"
                                    />
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="motherContact">
                                        Mother's Contact Number :
                                    </label>
                                    <input
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="motherContact"
                                        id="motherContact"
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    className="f6 grow-large no-underline br-pill ph4 pv2 mb2 dib white bg-purple pointer"
                                    type="submit"
                                    value="Register"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
