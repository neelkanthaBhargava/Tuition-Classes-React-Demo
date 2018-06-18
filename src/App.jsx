//@ts-check
import React, { Component } from 'react';
import './App.css';
import NavTop from './components/navigation/NavTop';
import Home from './components/home/Home';
import Boards from './components/home/Boards';
import Footer from './components/navigation/Footer';

class App extends Component {
  render() {
    return (
      <div >
        <NavTop />
        <Home />
        <Boards />
        <Footer />
      </div>
    );
  }
}

export default App;
