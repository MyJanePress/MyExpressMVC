import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';

import { Route, Link,} from 'react-router-dom';

export default class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <Route> 
                <div className="App">
                    {/* {this.props.children} */}
                    {/* <Switch> */}
                        {/* <Route path="/" exact={true} component={Hello}></Route> */}
                    {/* <Route path="/about" component={About}></Route> */}
                    {/* <Route path="/books" component={Books}></Route> */}
                    {/* </Switch> */}
                    <nav className="navbar navbar-expand-xl">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseibleNavbar">
                            <i className="fa fa-align-justify"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end m-2" id="collapseibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item m-3"><Link to="/signup">Sign Up</Link></li>
                                <li className="nav-item m-3"><Link to="/login">Log In</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container text-center">
                        <h1>Creat Account or Log In</h1>
                    </div>
                    <Route path="/signup" exact={true} component={SignUp}></Route>
                    <Route path="/login" component={Login}></Route>
                </div>
            </Route>
             );
    }
}

