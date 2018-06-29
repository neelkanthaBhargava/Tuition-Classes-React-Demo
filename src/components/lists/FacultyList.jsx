import React, { Component } from 'react'

export default class FacultyList extends Component {
    state = {
        facultyList: [
            {
                uid: 1,
                uname: 'Batman',
                email: 'batarang@gmail.com',
            },
            {
                uid: 2,
                uname: 'Superman',
                email: 'kryptoniteSun@gmail.com',
            },
            {
                uid: 3,
                uname: 'Iron man',
                email: 'iamironman@gmail.com',
            },
        ],
        searchValue: '',
        filterValue: 'uid',
        listVisible: true,
        facultySelectId: ''

    }

    onFilterChange = (event) => {
        this.setState({ filterValue: event.target.value });
    }

    onSearchValueChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }

    onFacultyClick = (uid) => {
        this.setState({listVisible: false, facultySelectId: uid});
    }

    render() {
        const { facultyList, searchValue, filterValue } = this.state;

        let newFacultyList = facultyList.filter((faculty) => {
            if (searchValue !== '') {

                if (filterValue === 'uid') {
                    return Number(searchValue) === Number(faculty.uid);
                }
                else if (filterValue === 'uname') {
                    return faculty.uname.toLowerCase().includes(searchValue.toLowerCase());
                }
                else if (filterValue === 'std')
                    return searchValue.toLowerCase() === faculty.std.toLowerCase();
                else return true;
            }
            else return true;
        });
        return (
            <div>
                <div className='bg-white center mt4 w-75 br3 shadow-4'>
                    <article className="cf ph3 ph5-ns pv5">
                        <h1 className="f3 f2-m f1-l pl4">Faculty List</h1>
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
                                        </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                        {
                                            newFacultyList.map((faculty) => {
                                                return (
                                                    <tr
                                                        onClick={() => this.onFacultyClick(faculty.uid)}
                                                        key={faculty.uid}
                                                        className="stripe-dark pointer shadow-4 grow">
                                                        <td className="pa3 pl4" >{faculty.uid}</td>
                                                        <td className="pa3" >{faculty.uname}</td>
                                                        <td className="pa3" >{faculty.email}</td>
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
