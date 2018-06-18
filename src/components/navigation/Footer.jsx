import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
                    <small class="f6 db tc">© 2018 <b class="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
                    <div class="tc mt3">
                        <span class="f6 dib ph2 link mid-gray dim pointer">Terms of Use</span>
                        <span class="f6 dib ph2 link mid-gray dim pointer">Privacy</span>
                    </div>
                </footer>
            </div>
        )
    }
}
