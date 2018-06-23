import React, { Component } from 'react';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <article className="center mw6 mw7-ns br3  bg-white mv3 shadow-4">
                    <h1 className="f2 bg-white br3 br--top black-60 mv1 tc pa2">Contact Us</h1>
                    <hr className="mw6 mw7-ns bb bw1 b--black-10" />
                    <div className="pa4 flex justify-start flex-wrap bg-white">
                        <div><h2 className="f5 f4-ns lh-copy measure">
                            Tuition Classes Help Desk:
                        </h2>
                        <p className="f6 f5-ns lh-copy measure">
                            <strong>Address : </strong><br/>
                            36, ABC road, <br/>
                            XYZ,<br/>
                            UP - 123456.<br/>
                            <strong>Contact Number : </strong>1234567899<br/>
                            <strong>Email : </strong>abc@xyz.com<br/>
                        </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
