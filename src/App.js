import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePannel from './components/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Error from './components/Error';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserPage from './components/UserPage';
import { PrivateRoute } from './components/PrivateRoute';
import Pannel from './components/pannel/components/PannelHome'
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
              <Route path="/" component={HomePannel}></Route>
              <Route path="/signup" component={SignUpPage}></Route>
              <Route path="/login" component={LoginPage}></Route>
              <PrivateRoute path="/user" component={UserPage} />
              <PrivateRoute path="/pannel" component={Pannel} />
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
