import React, { Component } from "react";
import HomeContainer from "./containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import NotFoundContainer from "./containers/NotFoundContainer";
import SignupContainer from "./containers/SignupContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="nav navbar-light"
            style={{ backgroundColor: "green" }}
          >
            <Link className="navbar-brand" to="/">
              TRIPPY
            </Link>
              <ul className="nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/hotels">
                    Hotels                    
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/hotels/:id">
                    Restaurants                    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="*">
                  </Link>
                </li>
              </ul>
          </nav>
          <Switch>
            <Route path="/">
              <HomeContainer />
            </Route>
            <Route path="/hotels/:id">
              <HomeContainer />
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/signup">
              <SignupContainer />
            </Route>
            <Route path="*">
              <NotFoundContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
