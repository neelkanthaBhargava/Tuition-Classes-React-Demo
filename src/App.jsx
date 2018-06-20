//@ts-check
import React, { Component } from 'react';
import './App.css';
import NavTop from './components/navigation/NavTop';
import Home from './components/home/Home';
import Boards from './components/home/Boards';
import Footer from './components/navigation/Footer';
import CommonNav from './components/navigation/CommonNav';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';

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
        {
          route === 'home'
            ? <div>
              <NavTop onRouteChange={this.onRouteChange} route={route} isSignedIn={isSignedIn} />
              <Home />
              <Boards />
            </div>
            : <div>
              <CommonNav onRouteChange={this.onRouteChange} route={route} isSignedIn={isSignedIn} />
              {
                route === 'signin'
                  ? <Signin onRouteChange={this.onRouteChange} />
                  : <div>{
                    route === 'signup'
                      ? <Register />
                      : <div>{route}</div>
                  }
                  </div>
              }
            </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
