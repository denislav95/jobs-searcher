import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Nav.css';
import helper from "../../services/firebase";
import {toast} from 'react-toastify';

class Nav extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        helper.checkUserLogged()
            .then((isLoggedIn) => {
                if (isLoggedIn) {
                    this.setState({loggedIn: true})
                }
            })
    }

    logout = () => {
        helper.logout()
            .then(() => {
                toast('Logout successful!', {type: toast.TYPE.SUCCESS})
                this.setState({loggedIn: false})
            })
            .catch(function (error) {
                toast(error.message, {type: toast.TYPE.ERROR})
            })
    }

    render() {
        if (this.state.loggedIn) {
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