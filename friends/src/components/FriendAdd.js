import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';

const FriendAdd = () => {
  const [ friend, setFriend ] = useState({
    name: '',
    age: '',
    email: ''
  })

  const addFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        setFriend(res.data)
      })
      .catch(err => {
        console.log('error:', err)
      })
  }

  const handleChanges = event => {
    setFriend({...friend, [event.target.name]: event.target.value});
    console.log('friend in FriendAdd:', friend)
  }

  return(
    <div>
      <h1>It's great to have friends!</h1>
      <form onSubmit={addFriend} className='form-contain'>
        <label>Add a friend!</label>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={friend.name}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='age'
          placeholder='age'
          value={friend.age}
          onChange={handleChanges}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={friend.email}
          onChange={handleChanges}
        />
        <button>Add a New Friend!</button>
      </form>
    </div>
  )
}

export default FriendAdd;
