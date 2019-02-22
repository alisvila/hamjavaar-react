import React, { Component } from 'react';
import { userService } from '../_services/UserServices';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    submitCredentials(e) {
        e.preventDefault();

        userService.login(this.username, this.password)
          .then(response => {
            this.$router.push(this.$route.query.redirect || '/')
          })
          .catch(error => {
            console.log('READ', error)
          })
      }

    updateInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFakeUser(e) {
        e.preventDefault();
        let user = { "firstName": "ali", "username": "aliam", "phoneNumber": "123456", "email": "a@a.com"}
        localStorage.setItem('user', JSON.stringify(user))
    }

    render() {
        return (
            <div className="container">
            <div className="columns is-centered login-page">
            <div className="column is-4">
                <div className="box">
                <form id="login-form" onSubmit={this.submitCredentials}>
                    <div className="field">
                    <label className="label">username</label>
                    <div className="control">
                        <input
                            name="username"
                            value={this.state.username} 
                            onChange={e => this.updateInputValue(e)} 
                            className="input" 
                            type="text" 
                            placeholder="Text input" 
                            dir="ltr" 
                        />
                    </div>
                    </div>

                    <div className="field">
                    <label className="label">password</label>
                    <div className="control">
                        <input
                            name="password"
                            value={this.state.password} 
                            onChange={e => this.updateInputValue(e)} 
                            className="input" 
                            type="password" 
                            placeholder="password" 
                            dir="ltr" 
                        />                
                        </div>
                    </div>

                    <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link" type="submit">submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">cancel</button>
                    </div>
                    </div>
                    <button onClick={e => this.addFakeUser(e)} className="button is-text"> add fake user </button>
                </form>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default LoginPage;
