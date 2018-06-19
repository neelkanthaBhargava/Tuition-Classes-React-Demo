//@ts-check
import React, { Component } from 'react';
import './App.css';
import NavTop from './components/navigation/NavTop';
import Home from './components/home/Home';
import Boards from './components/home/Boards';
import Footer from './components/navigation/Footer';
import CommonNav from './components/navigation/CommonNav';

const initialState = {
  route: 'home',
  user: {
    uname: '',
    email: '',
  },
  isSignedIn: false
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  } 

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
            {`Something route ${route}`}</div>
          }
        <Footer />
      </div>
    );
  }
}

export default App;
