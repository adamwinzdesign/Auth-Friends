import React, { useEffect, useState } from 'react';
import FriendAdd from './FriendAdd';

import axiosWithAuth from './axiosWithAuth';

const FriendsList = () => {

  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
      .then(response => {
        console.log('response in FriendsList.js: ', response);
        setFriends(response.data);
      })
      .catch(error => console.log('error: ', error.response))
  }, []);

  console.log('friends in useEffect: ', friends);

  return(
    <div className='listContain'>
      <h1>Here is your list of friends!</h1>
      {friends.map((friend) => {
        return(
          <div key={friend.id} className='friendCard'>
            <p>Friend name: {friend.name}</p>
            <p>Friend age: {friend.age}</p>
            <p>Friend email: {friend.email}</p>
          </div>
        )
      })}
      <FriendAdd />
    </div>
  )
}

export default FriendsList;
