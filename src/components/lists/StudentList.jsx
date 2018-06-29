import React, { Component } from 'react'

export default class StudentList extends Component {
    state = {
        studentList: [
            {
                uid: 1,
                uname: 'neelkantha',
                email: 'neelkantha.96@gmail.com',
                std: '10'
            },
            {
                uid: 2,
                uname: '2neelkantha',
                email: '2neelkantha.96@gmail.com',
                std: '11'
            },
            {
                uid: 3,
                uname: '3neelkantha',
                email: '3neelkantha.96@gmail.com',
                std: '12'
            },
        ],
        searchValue: '',
        filterValue: 'uid',
        listVisible: true,
        studentSelectId: ''

    }

    onFilterChange = (event) => {
        this.setState({ filterValue: event.target.value });
    }

    onSearchValueChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }

    onStudentClick = (uid) => {
        this.setState({listVisible: false, studentSelectId: uid});
    }

    render() {
        const { studentList, searchValue, filterValue } = this.state;

        let newStudentList = studentList.filter((student) => {
            if (searchValue !== '') {

                if (filterValue === 'uid') {
                    return Number(searchValue) === Number(student.uid);
                }
                else if (filterValue === 'uname') {
                    return student.uname.toLowerCase().includes(searchValue.toLowerCase());
                }
                else if (filterValue === 'std')
                    return searchValue.toLowerCase() === student.std.toLowerCase();
                else return true;
            }
            else return true;
        });
        return (
            <div>
                <div className='bg-white center mt4 w-75 br3 shadow-4'>
                    <article className="cf ph3 ph5-ns pv5">
                        <h1 className="f3 f2-m f1-l pl4">Students List</h1>
                        <span className='pa4' >
                            <span className='dib br-100 h1 w1 mr2 mt1' >
                                <img className='' src='assets/searchIcon.png' alt='' />
                            </span>
                            <span className='dib br-100 h2 mr2 mt1'>
                                <input
                                    onChange={this.onSearchValueChange}
                                    placeholder={`Enter Search Key`}
                                    className="mw-100 w-75 w5-ns f5 gray input-reset ba b--black-20 pv2 ph4 border-box" />
                            </span>
                            <span className='dib br-100 h1 w1 mr2 mt1' >
                                <img className='' src='assets/filterIcon.png' alt='' />
                            </span>
                            <span className='dib br-100 h2 mr2 mt1'>
                                <select
                                    onChange={this.onFilterChange}
                                    className="mw-100 w-75 w4-ns f5 input-reset ba b--black-20 pv2 ph4 border-box gray"
                                    defaultValue='uid' >
                                    <option value='uid'>by ID</option>
                                    <option value='uname'>by Name </option>
                                    <option value='std'>by Class </option>
                                </select>
                            </span>
                        </span>
                        <div className="pa4">
                            <div className="overflow-auto">
                                <table className="f6 w-100 mw8 center" cellSpacing="0">
                                    <thead>
                                        <tr className="stripe-dark">
                                            <th className="fw6 tl pa3 pl4 bg-white">User ID</th>
                                            <th className="fw6 tl pa3 bg-white">Name</th>
                                            <th className="fw6 tl pa3 bg-white">Email</th>
                                            <th className="fw6 tl pa3 bg-white">Class</th>
                                        </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                        {
                                            newStudentList.map((student) => {
                                                return (
                                                    <tr
                                                        onClick={() => this.onStudentClick(student.uid)}
                                                        key={student.uid}
                                                        className="stripe-dark pointer shadow-4 grow">
                                                        <td className="pa3 pl4" >{student.uid}</td>
                                                        <td className="pa3" >{student.uname}</td>
                                                        <td className="pa3" >{student.email}</td>
                                                        <td className="pa3" >{student.std}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
