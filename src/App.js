import React, { Component } from 'react';
import Login from './components/LoginPage/Login';
import Home from './components/HomePage/Home';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" Protect={Home}/>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
