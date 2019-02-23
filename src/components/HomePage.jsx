import React, { Component } from 'react';
import './HomePage.css'


class HomePage extends Component {
  render() {
    return (
        <div className="container">
            <div className="columns is-centered is-vcentered banner">
                <div className="column is-half has-text-centered">
                   <h1 className="title">this is title bulma</h1>
                   <p>some text here</p>
                </div>
            </div>
        </div>
    );
  }
}

export default HomePage;


