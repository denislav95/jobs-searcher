import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <Link to="/"><a className="navbar-brand">Job Tinder</a></Link>
                <div className="my-2 my-lg-0">
                    <Link to="/login"><button className="btn btn-outline-primary" type="button">Log In</button></Link>
                    <Link to="/register"><button className="btn btn-outline-primary" type="button">Sign Up</button></Link>
                </div>
            </nav>
        );
    }
}

export default Nav;