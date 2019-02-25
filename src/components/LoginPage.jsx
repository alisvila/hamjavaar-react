import React, { Component } from 'react';
import { userService } from '../_services/UserServices';
import { Route, Redirect } from 'react-router'
// import { useTranslation } from 'react-i18next';


class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.submitCredentials = this.submitCredentials.bind(this);
    }

    submitCredentials(e) {
        e.preventDefault();
        const { from } = this.props.location.state || { from: { pathname: "/" }}
        console.log(from)
        this.props.history.push(from)

        // userService.login(this.username, this.password)
        //   .then(user => {
        //     })
        //   .catch(error => {
        //     console.log('READ', error)
        //   })
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
        // const { t, } = useTranslation()
        return (
            <section className="hero is-fullheight">
            <div className="hero-body">
            <div className="container has-text-centered">
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
            </div>
            </section>
        );
    }
}

export default LoginPage;
