import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Home from "./Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Customer from './Customer';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import PrivateRouter from './PrivateRouter';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <Router>
                <Route>
                    <div className="container">
                        <Navigation ></Navigation>
                        <Route path="/" exact={true} component={Home}></Route>
                        <Route path="/signup" exact={true} component={SignUp}></Route>
                        <Route path="/login" exact={true} component={Login}></Route>
                        <PrivateRouter path='/customer' component={Customer} userlogin={this.props.userlogin} />
                    </div> 
                </Route>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userlogin: state.userlogin
    }
};

export default connect(mapStateToProps)(App);
