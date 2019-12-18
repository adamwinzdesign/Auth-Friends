import React from 'react';
import FriendAdd from './FriendAdd';

import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const FriendsList = () => {
  const getFriends = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(response => {
        console.log('response in FriendsList.js: ', response);
      })
      .catch(error => console.log('error: ', error))
  }

  getFriends();

  return(
    <div>
      <h1>Here is your list of friends!</h1>
      <FriendAdd />
    </div>
  )
}

export default FriendsList;
