import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Discover from './components/Discover'
import DiscoverBattle from './components/DiscoverBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import MyList from './components/MyList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav >
              <div className="App-header rounded-pill bg-gradient-warning"><h1 >MOOVICE</h1></div>
              <ul className="mt-6 btn-group">
                <li><button className="btn btn-warning"><Link to="/">This week</Link></button></li>
                <li><button className="btn btn-warning"><Link to="/battle/">This week battle</Link></button></li>
                <li><button className="btn btn-warning"><Link to="/popular/">Popular</Link></button></li>
                <li><button className="btn btn-warning"><Link to="/popular-battle/">Popular battle</Link></button></li>
                <li><button className="btn btn-warning"><Link to="/my-list/">My List</Link></button></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/battle/">
                <DiscoverBattle />
              </Route>
              <Route path="/popular/">
                <Popular />
              </Route>
              <Route path="/popular-battle/">
                <PopularBattle />
              </Route>
              <Route path="/my-list/">
                <MyList />
              </Route>
              <Route path="/">
                <Discover />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
