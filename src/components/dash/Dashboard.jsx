import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        const { user, userType } = this.props;
        return (
            <div className='bg-white center mt4 w-80 br3 shadow-4'>
                <article className="cf ph3 ph5-ns pv5">
                    <header className="fn fl-ns w-30-ns pr4-ns">
                        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                            Dashboard
                        </h1>
                        <h2 className="f3 mid-gray lh-title">
                            My Profile
                        </h2>
                        <div className="pa2 tc">
                            <img
                                src="https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg"
                                className="br-100 h5 w5 dib" alt="avatar" />
                        </div>
                    </header>
                    <div className="fn fl-ns w-70-ns">
                        <div className="tc pa2">
                            <div className="measure center">
                                <fieldset id="account"
                                    className="ba b--transparent ph0 mh0">
                                    <legend className="f2 fw6 ph0 mh0">
                                        Account
                                    </legend>
                                    <hr className='gray bw1 br1 mw3' />
                                    <div className="mt3 pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="uname">
                                                Name :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="text"
                                                name="uname"
                                                id="uname"
                                                disabled
                                                value={user.uname}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="email-address">
                                                Email :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                                disabled
                                                value={user.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="contact-number">
                                                Contact Number :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white "
                                                type="text"
                                                name="contact-number"
                                                id="contact-number"
                                                disabled
                                                value={user.contact}
                                            />
                                        </div>
                                    </div>
                                    {
                                        userType === 'student'
                                            ? <div>
                                                <div className="pa3">
                                                    <div className='dib v-mid w-30'>
                                                        <label className="fw6 lh-copy f6 pb1"
                                                            htmlFor="std">
                                                            Class :
                                                        </label>
                                                    </div>
                                                    <div className='dib w-60 ml4'>
                                                        <input
                                                            className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white "
                                                            type='text'
                                                            name="std"
                                                            id="std"
                                                            disabled
                                                            value={user.std}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pa3">
                                                    <div className='dib v-mid w-30'>
                                                        <label className="fw6 lh-copy f6 pb1"
                                                            htmlFor="board">
                                                            Board :
                                                        </label>
                                                    </div>
                                                    <div className='dib w-60 ml4'>
                                                        <input
                                                            className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white "
                                                            type='text'
                                                            name="board"
                                                            id="board"
                                                            disabled
                                                            value={user.board}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pa3">
                                                    <div className='dib v-mid w-30'>
                                                        <label className="fw6 lh-copy f6 pb1"
                                                            htmlFor="school">
                                                            School :
                                                        </label>
                                                    </div>
                                                    <div className='dib w-60 ml4'>
                                                        <input
                                                            className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                            type="text"
                                                            name="school"
                                                            id="school"
                                                            disabled
                                                            value={user.school}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            : userType === 'faculty'
                                                ? <div>
                                                    <div className="pa3">
                                                        <div className='dib v-mid w-30'>
                                                            <label className="fw6 lh-copy f6 pb1"
                                                                htmlFor="std">
                                                                Salary :
                                                        </label>
                                                        </div>
                                                        <div className='dib w-60 ml4'>
                                                            <input
                                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white "
                                                                type='text'
                                                                name="salary"
                                                                id="salary"
                                                                disabled
                                                                value={user.salary}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                : <div></div>
                                    }
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="address">
                                                Address :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <textarea
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                name="address"
                                                id="address"
                                                rows={3}
                                                disabled
                                                value={user.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="fatherName">
                                                Father's Name :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="text"
                                                name="fatherName"
                                                id="fatherName"
                                                disabled
                                                value={user.fathersName}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="fatherContact">
                                                Father's Contact Number :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="text"
                                                name="fatherContact"
                                                id="fatherContact"
                                                disabled
                                                value={user.fathersContact}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="motherName">
                                                Mother's Name :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="text"
                                                name="motherName"
                                                id="motherName"
                                                disabled
                                                value={user.mothersName}
                                            />
                                        </div>
                                    </div>
                                    <div className="pa3">
                                        <div className='dib v-mid w-30'>
                                            <label className="fw6 lh-copy f6 pb1"
                                                htmlFor="motherContact">
                                                Mother's Contact Number :
                                            </label>
                                        </div>
                                        <div className='dib w-60 ml4'>
                                            <input
                                                className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white"
                                                type="text"
                                                name="motherContact"
                                                id="motherContact"
                                                disabled
                                                value={user.mothersContact}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
