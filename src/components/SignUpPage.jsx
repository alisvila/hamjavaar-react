import React, { Component } from 'react';
import { userService } from '../_services/UserServices';

class SignUpPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="container">
            <div className="columns is-centered login-page">
            <div className="column is-4">
                <div className="box">
                <form id="login-form" onSubmit={this.submitCredentials}>

                </form>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default SignUpPage;
