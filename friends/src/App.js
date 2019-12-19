import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className='nav-list'>
          <li>
            <Link to='/login' className='nav-link'>Log In</Link>
          </li>
          <li>
            <Link to='/protected' className='nav-link'>Protected Page</Link>
          </li>
          {/* <li>
            <Link to='/friendslist' className='nav-link'>Friends List</Link>
          </li>
          <li>
            <Link to='/addFriend' className='nav-link'>Add a Friend</Link>
          </li> */}
        </ul>

        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
