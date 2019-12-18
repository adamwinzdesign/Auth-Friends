import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendAdd from './components/FriendAdd';
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
            <Link to='/friendslist' className='nav-link'>Friends List</Link>
          </li>
          <li>
            <Link to='/addFriend' className='nav-link'>Add a Friend</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path='/friendslist'>
            <FriendsList />
          </PrivateRoute>

          <PrivateRoute path='/addfriend'>
            <FriendAdd />
          </PrivateRoute>

          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
