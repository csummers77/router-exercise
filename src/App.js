import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" component={BootstrapNavBar} />
        <div className="container main">
          <Route path="/"component={Home}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
