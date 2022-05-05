import React, { useState } from 'react';
import UserAuth from '../../hooks/UserAuth';

export default function Account() {
  const { logout } = UserAuth();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className='container'>
      <h1> Hi: {user.email}</h1>
      <button className='btn' onClick={() => logout()}>logout</button>
    </div>
  )
}
