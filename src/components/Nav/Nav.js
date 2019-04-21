import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import {logout} from "../../services/firebase";
import {toast} from 'react-toastify';

class Nav extends Component {

    logout = () => {
        logout()
            .then(() => {
                // toast('Logout successful!', {type: toast.TYPE.SUCCESS})
                // this.setState({loggedIn: false})
                window.location.reload();
            })
            .catch(function (error) {
                toast(error.message, {type: toast.TYPE.ERROR})
            })
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <Link to="/"><span className="navbar-brand">Job Tinder</span></Link>
                    <div className="my-2 my-lg-0">
                        <Link to="/">
                            <button className="btn btn-outline-primary" type="button" onClick={this.logout}>Log Out
                            </button>
                        </Link>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <Link to="/"><span className="navbar-brand">Job Tinder</span></Link>
                    <div className="my-2 my-lg-0">
                        <Link to="/login">
                            <button className="btn btn-outline-primary" type="button">Log In</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-outline-primary" type="button">Sign Up</button>
                        </Link>
                    </div>
                </nav>
            );
        }

    }
}

export default Nav;