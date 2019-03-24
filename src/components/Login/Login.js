import React, {Component} from 'react';
import {login} from '../../services/firebase';

import './Login.css'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    componentDidMount() {
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    login = (e) => {
        e.preventDefault();
        login({
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        return (
            <div className="welcome-question login">
                <h4>Login</h4>
                <form onSubmit={this.login}>
                    <div class="input-group flex-nowrap">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping"><i class="far fa-envelope"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Email"
                               aria-label="Email" aria-describedby="addon-wrapping"
                        value={this.state.email} onChange={this.onChange} name="email"/>
                    </div>
                    <div class="input-group flex-nowrap">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password"
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