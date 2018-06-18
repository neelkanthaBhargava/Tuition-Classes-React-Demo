//@ts-check
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                    <hr className="mw-80 bb bw1 b--black-10" />
                    <small className="f6 db tc">© 2018 <strong className="ttu">SOME COMPANY Inc</strong>., All Rights Reserved</small>
                    <div className="tc mt3">
                        <span className="f6 dib ph2 link mid-gray dim pointer">Contact Us</span>
                        <span className="f6 dib ph2 link mid-gray dim pointer">Terms of Use</span>
                        <span className="f6 dib ph2 link mid-gray dim pointer">Privacy</span>
                    </div>
                </footer>
            </div>
        )
    }
}
