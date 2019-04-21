import React, {Component} from 'react';
import {register, saveUserData} from '../../services/firebase';
import {toast} from 'react-toastify';

import './Register.css'

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    register = (e) => {
        e.preventDefault();
        register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            data: this.props.location.data
        }).then(() => {
            toast('Registration successful!', {type: toast.TYPE.SUCCESS})
            return this.props.history.push("/profile")
        }).catch(error => {
            toast(error.message, {type: toast.TYPE.ERROR})
        })
    }

    render() {
        return (
            <div className="welcome-question register">
                <h4>Create account</h4>
                <form onSubmit={this.register}>
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i
                                className="fas fa-user-circle"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Your Name"
                               aria-label="Your Name" aria-describedby="addon-wrapping"
                               value={this.state.name} onChange={this.onChange} name="name"/>
                    </div>
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
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Confirm Password"
                               aria-label="Confirm Password" aria-describedby="addon-wrapping"
                               value={this.state.confirm_password} onChange={this.onChange} name="confirm_password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;