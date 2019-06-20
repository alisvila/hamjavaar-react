    import React, { Component } from 'react';
import { userService } from '../_services/UserServices';
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import './LoginPage.css'

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
        console.log("render in login page")
        // const { t, } = useTranslation()
        return (
            <div className="container">
                <div className="row login-box-wrapper">
                    <div class="col-md-6 nopadding login-box">
                        <div className="login-wrapper">
                            <form className="form-signin" id="login-form" onSubmit={this.submitCredentials}>
                                <img className="mb-4 logo"
                                    src="https://sabinarya.com/wp-content/uploads/2019/04/Sabin_Tejarat-Aria-Vsmall.png" alt="" />
                                <label for="inputEmail" className="sr-only">آدرس ایمیل</label>
                                <input name="username" value={this.state.username} onChange={e=> this.updateInputValue(e)}
                                className="input"
                                type="text"
                                placeholder="Text input"
                                dir="ltr"
                                />
                                <label for="inputPassword" className="sr-only">روز عبور</label>
                                <input name="password" value={this.state.password} onChange={e=> this.updateInputValue(e)}
                                className="input"
                                type="password"
                                placeholder="password"
                                dir="ltr"
                                /> 
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> مرا به خاطر بسپار
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-lg btn-finno btn-block">ورود</button>
                                <button onClick={e=> this.addFakeUser(e)} className="button is-text"> add fake user </button>
                                <p className="error" id="error"></p>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 nopadding login-box">
                        <div className="login-wrapper">
                            <h2>filan</h2>
                            <p>we</p>
                        </div>
                    </div>
                </div>

                <div className="power">
                    <span>with <img className="heart"
                            src="https://static.djangoproject.com/img/small-fundraising-heart.d255f6e934e5.png" /> by </span>
                    <img src="http://filan.sabinarya.com/images/favicon.jpeg" />
                </div>

            </div>
        );
    }
}

export default LoginPage;
