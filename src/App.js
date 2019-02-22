import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error from './components/Error';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserPage from './components/UserPage';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <NavBar />
            <Switch>
              <Route path="/" component={HomePage} exact></Route>
              <Route path="/signup" component={SignUpPage}></Route>
              <Route path="/login" component={LoginPage}></Route>
              <Route path="/user" component={UserPage}></Route>
              <Route component={Error}></Route>
            </Switch>
          </>
        </Router>
        <Footer />
      </>

    );
  }
}

export default App;
