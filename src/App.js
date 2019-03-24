import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div id="root">
                    <Nav/>
                    <div className="App">
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;