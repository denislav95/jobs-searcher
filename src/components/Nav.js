import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Job Tinder</a>
                <div className="my-2 my-lg-0">
                    <button className="btn btn-outline-primary" type="button">Log in</button>
                    <button className="btn btn-outline-primary" type="button">Sign Up</button>
                </div>
            </nav>
        );
    }
}

export default Nav;