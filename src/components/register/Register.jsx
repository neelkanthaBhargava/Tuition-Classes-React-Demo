//@ts-check
import React, { Component } from 'react';
import { isPasswordValid, isEmailValid, isNameValid, isContactValid } from '../../utilities/Validation';


export default class FacultyLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validPass: false,
            validEmail: false,
            validName: false,
            validMothersName: false,
            validFathersName: false,
            validContact: false,
            validFathersContact: false,
            validMothersContact: false,

            email: '',
            pass: '',
            uname: '',
            fathersName: '',
            mothersName: '',
            contact: '',
            fathersContact: '',
            mothersContact: '',
            board: '',
            std: '',
            school: '',
            address: '',
        }
    }

    onPasswordChange = (event) => {
        const pass = event.target.value;
        // console.log('pass',pass);
        if (isPasswordValid(pass))
            this.setState({ validPass: true });
        else this.setState({ validPass: false });
        this.setState({ pass: pass });
    }

    onEmailChange = (event) => {
        const email = event.target.value;
        // console.log('pass',pass);
        if (isEmailValid(email))
            this.setState({ validEmail: true });
        else this.setState({ validEmail: false });
        this.setState({ email: email });
    }

    onNameChange = (event) => {
        const name = event.target.value;
        if (isNameValid(name)) {
            this.setState({ validName: true });
        } else {
            this.setState({ validName: false });
        }
        this.setState({ uname: name });
    }

    onMothersNameChange = (event) => {
        const name = event.target.value;
        if (isNameValid(name)) {
            this.setState({ validMothersName: true });
        } else {
            this.setState({ validMothersName: false });
        }
        this.setState({ mothersName: name });
    }

    onFathersNameChange = (event) => {
        const name = event.target.value;
        if (isNameValid(name)) {
            this.setState({ validFathersName: true });
        } else {
            this.setState({ validFathersName: false });
        }
        this.setState({ fathersName: name });
    }

    onContactChange = (event) => {
        const contact = event.target.value;
        if (isContactValid(contact)) {
            this.setState({ validContact: true });
        } else {
            this.setState({ validContact: false });
        }
        this.setState({ contact: contact });
    }

    onFathersContactChange = (event) => {
        const contact = event.target.value;
        if (isContactValid(contact)) {
            this.setState({ validFathersContact: true });
        } else {
            this.setState({ validFathersContact: false });
        }
        this.setState({ fathersContact: contact });
    }

    onMothersContactChange = (event) => {
        const contact = event.target.value;
        if (isContactValid(contact)) {
            this.setState({ validMothersContact: true });
        } else {
            this.setState({ validMothersContact: false });
        }
        this.setState({ mothersContact: contact });
    }

    onBoardChange = (event) => {
        const board = event.target.value;
        if(board !== 'none')
        this.setState({ board: board });
    }

    onStdChange = (event) => {
        const std = event.target.value;
        if(std !== 'none')
        this.setState({ std: std });
    }

    onAddressChange = (event) => {
        const address = event.target.value;
        console.log(address);
        this.setState({ address: address });
    }

    onSchoolChange = (event) => {
        const school = event.target.value;
        console.log(school);
        this.setState({ school: school });
    }

    render() {
        const { pass, validPass, email, validEmail,
            uname, validName, fathersName, mothersName,
            contact, fathersContact, mothersContact, validMothersName,
            validFathersName, validContact, validFathersContact,
            validMothersContact, } = this.state;
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
                                        onChange={this.onNameChange}
                                        className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="uname"
                                        id="uname"
                                    />
                                    {
                                        uname !== '' ?
                                            <div
                                                className={` ${validName ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validName ? '' : 'Name should be <30 characters!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="email-address">
                                        Email :
                                    </label>
                                    <input
                                        onChange={this.onEmailChange}
                                        className="pa2 br2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                    />
                                    {
                                        email !== '' ?
                                            <div
                                                className={`br2 pa2 mt2 ba w-100 ${validEmail ? 'bg-light-green dark-green' : 'dark-red bg-washed-red'}`}>
                                                {validEmail ? 'Correct Email!!!!!!' : 'Incorrect Email!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="password">
                                        Password :
                                    </label>
                                    <input
                                        onChange={this.onPasswordChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                    {
                                        pass !== '' ?
                                            <div
                                                className={`br2 pa2 mt2 ba w-100 ${validPass ? 'bg-light-green dark-green' : 'dark-red bg-washed-red'}`}>
                                                {validPass ? 'Correct password!!!!!!' : <div>
                                                    Weak Password :-( <br />
                                                    <ul className='tl'>
                                                        <li>Password must be 8-16 characters in length.</li>
                                                        <li>It must contain atleast one Upper case and one Lower Case</li>
                                                        <li>It must contain atleast one digit</li>
                                                        <li>It must contain atlest one special character(!@#\$%&^*)</li>
                                                    </ul>
                                                </div>}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="contact-number">
                                        Contact Number :
                                    </label>
                                    <input
                                        onChange={this.onContactChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="contact-number"
                                        id="contact-number"
                                    />
                                    {
                                        contact !== '' ?
                                            <div
                                                className={` ${validContact ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validContact ? '' : 'Invalid contact number!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="std">
                                        Class :
                                    </label>
                                    <select
                                        onChange={this.onStdChange}
                                        className="br2 pa2 ba bg-transparent  w-100"
                                        name="std"
                                        id="std"
                                        defaultValue='none'>
                                        <option value='none' disabled>None</option>
                                        <option value='kg'>K.G.</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                        <option value='11'>11</option>
                                        <option value='12'>12</option>
                                    </select>
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="board">
                                        Board :
                                    </label>
                                    <select
                                        onChange={this.onBoardChange}
                                        className="br2 pa2 ba bg-transparent w-100"
                                        name="board"
                                        id="board"
                                        defaultValue='none'>
                                        <option value='none' disabled>None</option>
                                        <option value='icse' >I.C.S.E.</option>
                                        <option value='cbse'>C.B.S.E.</option>
                                        <option value='up'>U.P.</option>
                                    </select>
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="school">
                                        School :
                                    </label>
                                    <input
                                        onChange={this.onSchoolChange}
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
                                        onChange={this.onSchoolChange}
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
                                        onChange={this.onFathersNameChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="fatherName"
                                        id="fatherName"
                                    />
                                    {
                                        fathersName !== '' ?
                                            <div
                                                className={` ${validFathersName ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validFathersName ? '' : 'Name should be <30 characters!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="fatherContact">
                                        Father's Contact Number :
                                    </label>
                                    <input
                                        onChange={this.onFathersContactChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="fatherContact"
                                        id="fatherContact"
                                    />
                                    {
                                        fathersContact !== '' ?
                                            <div
                                                className={` ${validFathersContact ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validFathersContact ? '' : 'Invalid contact number!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="motherName">
                                        Mother's Name :
                                    </label>
                                    <input
                                        onChange={this.onMothersNameChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="motherName"
                                        id="motherName"
                                    />
                                    {
                                        mothersName !== '' ?
                                            <div
                                                className={` ${validMothersName ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validMothersName ? '' : 'Name should be <30 characters!!!!!!'}
                                            </div> : <span></span>
                                    }
                                </div>
                                <div className="pa3">
                                    <label className="db fw6 lh-copy f6 pb1"
                                        htmlFor="motherContact">
                                        Mother's Contact Number :
                                    </label>
                                    <input
                                        onChange={this.onMothersContactChange}
                                        className="br2 pa2 tc input-reset ba bg-transparent bg-animate hover-bg-light-silver hover-white w-100"
                                        type="text"
                                        name="motherContact"
                                        id="motherContact"
                                    />
                                    {
                                        mothersContact !== '' ?
                                            <div
                                                className={` ${validMothersContact ? '' : 'br2 pa2 mt2 ba w-100 dark-red bg-washed-red'}`}>
                                                {validMothersContact ? '' : 'Invalid contact number!!!!!!'}
                                            </div> : <span></span>
                                    }
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
