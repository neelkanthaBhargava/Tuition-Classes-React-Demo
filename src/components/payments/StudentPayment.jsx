import React, { Component } from 'react'

export default class StudentPayment extends Component {
    state = {
        paymentList: [
            {
                pid: '1',
                date: '15/05/2018',
                forMonth: 'March',
                value: 30000,
            },
            {
                pid: '2',
                date: '18/06/2018',
                forMonth: 'June',
                value: 40000,
            },
            {
                pid: '3',
                date: '20/07/2018',
                forMonth: 'July',
                value: 50000,
            },
        ]
    }
    render() {
        const { user, userType } = this.props;
        const { paymentList } = this.state;
        return (
            <div className='bg-white center mt4 w-80 br3 shadow-4'>
                <article className="cf ph3 ph5-ns pv5">
                    <header className="fn fl-ns w-30-ns pr4-ns">
                        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                            Dashboard
                        </h1>
                        <h2 className="f3 mid-gray lh-title">
                            My Payments
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
                                        Payments
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
                                    {
                                        userType === 'student'
                                            ? <div>
                                                <div className="pa4">
                                                    <div className="overflow-auto">
                                                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                                                            <thead>
                                                                <tr className="stripe-dark">
                                                                    <th className="fw6 tl pa3 pl4 bg-white">User ID</th>
                                                                    <th className="fw6 tl pa3 bg-white">Name</th>
                                                                    <th className="fw6 tl pa3 bg-white">Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="lh-copy">
                                                                {
                                                                    paymentList.map((payment)=> {
                                                                        return (
                                                                            <tr
                                                                                key={payment.pid}
                                                                                className="stripe-dark pointer shadow-4 grow">
                                                                                <td className="pa3 pl4" >{payment.pid}</td>
                                                                                <td className="pa3" >{payment.date}</td>
                                                                                <td className="pa3" >{payment.forMonth}</td>
                                                                                <td className="pa3" >{payment.value}</td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            : <div></div>
                                    }
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
