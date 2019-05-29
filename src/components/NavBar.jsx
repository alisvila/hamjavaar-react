import React, { Component } from 'react';
import { userService } from '../_services/UserServices';
import { Link, BrowserRouter as Router } from 'react-router-dom';


class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }

        this.logout = this.logout.bind(this)

    }

    logout(e) {
        e.preventDefault();
        userService.logout();
        this.props.history.push("/")
    }

    render() {
        const { user } = this.state
        return (
            <div className="">
            <nav className="navbar nav-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/" className="navbar-item" >Home</Link>
                {userService.isLogedIn() &&
                <>
                    <Link to="/user" className="navbar-item" >User</Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">{user.firstName}</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Jobs</a>
                        <a className="navbar-item">Contact</a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" onClick={e => this.logout(e)}>logout</a>
                    </div>

                    </div>
                </>
                }
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    <a className="button" click="changeLang">lang</a>
                    {userService.isLogedIn() != true &&
                    <>
                        <Link to="/signup" className="navbar-item" >signup</Link>
                        <Link to="/login" className="navbar-item" >login</Link>
                    </>
                    }

                </div>
                </div>
            </div>

            </div>
            </nav>
            </div>
        );
    }
}

export default NavBar;