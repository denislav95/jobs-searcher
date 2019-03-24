import React, {Component} from 'react';

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
        console.log(e)
        
    }

    render() {
        return (
            <div className="welcome-question register">
                <h4>Create account</h4>
                <form onSubmit={this.register}>
                    <div class="input-group flex-nowrap">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-user-circle"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Your Name"
                               aria-label="Your Name" aria-describedby="addon-wrapping"
                               value={this.state.name} onChange={this.onChange} name="name"/>
                    </div>
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
                    <div class="input-group flex-nowrap">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-unlock-alt"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Confirm Password"
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