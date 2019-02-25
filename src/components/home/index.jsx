import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/home/components/NavBar';
import Footer from './components/home/components/Footer';
import Error from './components/Error';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import './App.css';
import 'bulma/css/bulma.css';
// import './i18n';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <Router>
          <>
            <NavBar />
            <Switch>
              <Route path="/signup" component={SignUpPage}></Route>
              <Route path="/login" component={LoginPage}></Route>
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
