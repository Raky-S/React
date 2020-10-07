import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover'
import DiscoverBattle from './components/DiscoverBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import MyList from './components/MyList'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <nav >
            <div className="App-header"><h1>MOOVICE</h1></div>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
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
     
      <body className="@import">

      </body>
      </div>
    );
  }
}

export default App;
