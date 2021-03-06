import React, {Component} from 'react';
import {login} from '../../services/firebase';
import {toast} from 'react-toastify';

import './Login.css'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    login = (e) => {
        e.preventDefault();

        login({
            email: this.state.email,
            password: this.state.password
        }).then(u => {
            const loggedUser = {email: u.user.email}
            localStorage.setItem('user', JSON.stringify(loggedUser))
            toast('Login successful!', { type: toast.TYPE.SUCCESS })
            this.props.history.push('/')
            window.location.reload();
        }).catch(function (error) {
            toast(error.message, { type: toast.TYPE.ERROR })
        })
    }

    render() {
        return (
            <div className="welcome-question login">
                <h4>Login</h4>
                <form onSubmit={this.login}>
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i
                                className="far fa-envelope"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Email"
                               aria-label="Email" aria-describedby="addon-wrapping"
                               value={this.state.email} onChange={this.onChange} name="email"/>
                    </div>
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password"
                               aria-label="Password" aria-describedby="addon-wrapping"
                               value={this.state.password} onChange={this.onChange} name="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;