import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <a><Link to={`/main`}>Show News</Link></a>
          <a><Link to={`/`}>Back to Home</Link></a>
          <Route path={`/main`} component={Main} />

        </div>
      </Router>
      
    );
  }
}

export default App;
