import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Home from "./Home";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Customer from './Customer';
import Navigation from './Navigation';

class App extends Component {
    render() { 
        return (
            <Router>
                <Route>
                    <div className="container">
                        <Navigation ></Navigation>
                            <Route path="/" exact={true} component={Home}></Route>
                            <Route path="/signup" exact={true} component={SignUp}></Route>
                            <Route path="/login" exact={true} component={Login}></Route>
                            <Route path="/customer" component={Customer}></Route>
                    </div> 
                </Route>
            </Router>
        );
    }
}

export default App;
