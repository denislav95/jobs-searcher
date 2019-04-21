import React, {Component} from 'react';
import {Router, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {ToastContainer} from 'react-toastify';
import {checkUserLogged} from "./services/firebase";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const history = createBrowserHistory()

class App extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        checkUserLogged()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({loggedIn})
                }
            })
    }

    render() {
        return (
            <Router history={history}>
                <div id="root">
                    <Nav loggedIn={this.state.loggedIn}/>
                    <div className="App">
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </div>
                <ToastContainer/>
            </Router>
        );
    }
}

export default App;