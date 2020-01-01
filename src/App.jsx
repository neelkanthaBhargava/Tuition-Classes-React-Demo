//@ts-check
import React, { Component } from 'react';
import './App.css';
import Footer from './components/navigation/Footer';
import ChangeRoute from './utilities/ChangeRoute';

const initialState = {
  route: 'home',
  user: {
    uname: '',
    email: '',
    contact: '',
    fathersName: '',
    mothersName: '',
    fathersContact: '',
    mothersContact: '',
    std: '',
    board: '',
    school: '',
    salary: '',
    address: '',
  },
  isSignedIn: false,
  userType: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        uname: data.uname,
        email: data.email,
        fathersName: data.fathersName,
        mothersName: data.mothersName,
        fathersContact: data.fathersContact,
        mothersContact: data.mothersContact,
        std: data.std,
        board: data.board,
        school: data.school,
        address: data.address,
      },
      userType: data.userType,
      isSignedIn: true,
    });
  };

  onRouteChange = (route) => {
    if (route === 'signout')
      this.setState(initialState);
    /* else if (route === 'dashboard')
      this.setState({ isSignedIn: true }); */
    else this.setState({ route: route });
  }

  render() {
    const { route, isSignedIn, userType, user } = this.state;
    return (
      <div >
        <ChangeRoute
          route={route}
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          userType={userType}
          user={user}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
