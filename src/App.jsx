//@ts-check
import React, { Component } from 'react';
import './App.css';
import NavTop from './components/navigation/NavTop';
import Home from './components/home/Home';
import Boards from './components/home/Boards';

class App extends Component {
  render() {
    return (
      <div >
        <NavTop />
        <Home />
        <Boards />
      </div>
    );
  }
}

export default App;
