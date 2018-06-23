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
    fathersName: '',
    mothersName: '',
    fathersContact: '',
    mothersContact: '',
    std: '',
    board: '',
    school: '',
    address: '',
  },
  isSignedIn: false
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
      }
    });
  };

  onRouteChange = (route) => {
    if (route === 'signout')
      this.setState(initialState);
    else if (route === 'dashboard')
      this.setState({ isSignedIn: true });
    else this.setState({ route: route });
  }

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div >
        <ChangeRoute route={route} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Footer />
      </div>
    );
  }
}

export default App;
