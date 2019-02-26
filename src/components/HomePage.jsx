import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';


import './HomePage.css'


class HomePage extends Component {
  render() {
    return (
      <>
      <NavBar /> 
      <section className="hero is-link is-fullheight is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">Hello! I am
            <h1 className="title is-1">
              Minion Tim
            </h1>
            <h2 className="subtitle is-3">
              Full Stack Web Developer
            </h2>
          </div>
        </div>
      </section>

      <section className="section" id="services">
      <div className="container section-heading has-text-centered">
        <h3 className="title is-2">Services</h3>
        <h4 className="subtitle is-5">What can I do for you?</h4>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="content">
                <h4 className="title is-5">Front End Web Development</h4>
                Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
                Vue.js.
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="content">
                <h4 className="title is-5">Back End Web Development</h4>
                Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
              </div>
            </div>
          </div>
        </div>
  
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="content">
                <h4 className="title is-5">Front End Web Development</h4>
                Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
                Vue.js.
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="content">
                <h4 className="title is-5">Back End Web Development</h4>
                Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="resume">
      <div className="section-heading has-text-centered">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my past</h4>
        <a href="#" className="button is-link is-medium">
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
    </section>
    <Footer />
    </>
    );
  }
}

export default HomePage;


